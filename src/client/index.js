import React from 'react';
import { hydrate } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from '../shared/App';

const globaldata = JSON.stringify(window.__PRELOADED_STATE__GLOBAL_);
const pageJson = JSON.stringify(window.__PRELOADED_STATE__PAGEJSON_);

/**
 * Renders a react component into the #react-root div container.
 * Since react 16, the `hydrate` method is used instead of `render` when dealing
 * with server side rendering.
 * @param Component React component that should be rendered
 */
const render = Component => {
  hydrate(
    <div className="ahc-redesign">
      <BrowserRouter>
        <main className="main-wrapper">
          <Component globaldata={globaldata} pageJson={pageJson} />
        </main>
      </BrowserRouter>
    </div>,
    document.getElementById('react-root')
  );
};

render(App);

/**
 * This script provides hot module reloading in development mode.
 */
if (module.hot) {
  module.hot.accept('../shared/App', () => {
    const App = require('../shared/App').default;
    render(App);
  });
}
