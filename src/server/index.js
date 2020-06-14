import React from 'react';
import ReactDOM from 'react-dom/server';
import { flushChunkNames } from 'react-universal-component/server';
import flushChunks from 'webpack-flush-chunks';
import Helmet from 'react-helmet';
import App from '../shared/App';
import axios from 'axios';
import { StaticRouter } from 'react-router';

/**
 * Provides the server side rendered app. In development environment, this method is called by
 * `react-hot-server-middleware`.
 *
 * This method renders the ejs template `public/views/index.ejs`.
 * @param clientStats Parameter passed by hot server middleware
 */

export default ({ clientStats }) => async (request, response) => {
  var callAPI = 'https://hn.algolia.com/api/v1/search?tags=front_page';
  axios.get(callAPI)
    .then(data => {
      const globalData = JSON.stringify(data.data);
      const pageJson = JSON.stringify(data.data.hits);
      const app = (
        <div className="ahc-redesign">
          <StaticRouter location={request.url} context={{}}>
            <main className="main-wrapper">
              <App pageJson={pageJson} globalData={globalData} />
            </main>
          </StaticRouter>
        </div>
      );
      const appString = ReactDOM.renderToString(app);
      const chunkNames = flushChunkNames();
      const { js, styles, cssHash } = flushChunks(clientStats, { chunkNames });

      //Setting up meta information for SEO.
      const helmet = Helmet.renderStatic();

      // TODO use javascript serializer for XSS attack.
      response.render('index', {
        title: helmet.title.toString(),
        meta: helmet.meta.toString(),
        link: helmet.link.toString(),
        appString,
        js,
        styles,
        cssHash,
        pageJson: pageJson,
        globalData: globalData,
        callAPI: JSON.stringify(callAPI),
      })

    })
    .catch((error) => {
      // Error
      if (error.request) {
        // The request was made but no response was received
        // `error.request` is an instance of XMLHttpRequest in the
        // browser and an instance of
        // http.ClientRequest in node.js
        console.log(error.request);
      } else {
        // Something happened in setting up the request that triggered an Error
        console.log('Error', error.message);
      }
      console.log(error.config);
    });
};