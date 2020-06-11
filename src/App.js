import React, { Component } from 'react';
import './App.css'
import Helmet from 'react-helmet';
import favicon from './assets/favicon.ico';
import appleFavicon from './assets/images/apple-touch-icon.png';
import HomePage from './shared/components/homePage/homePage'
import NewsRoomChart from './shared/components/newsChart/newsChart'

export default class App extends Component {

  setMetainfo() {
    return (
      <Helmet>
        <title>{metainfo.title}</title>
        <meta name="title" content={metainfo.title} />
        <meta name="description" content={metainfo.description} />
        <meta name="abstract" content={metainfo.abstract} />
        <meta http-equiv="content-language" content={metainfo.content_language} />
        <meta name="keywords" content={metainfo.keywords} />
        <meta name="robots" content={metainfo.robots} />
        <meta name="rights" content={metainfo.rights} />
        <meta name="referrer" content={metainfo.referrer} />
        <link rel="canonical" href={metainfo.canonical} />
        <link rel="shortlink" href={metainfo.shortlink} />
        <link rel="apple-touch-icon" href={appleFavicon} />
        <link rel="shortcut icon" href={favicon} type="image/x-icon" />
        <meta name="google-site-verification" content="noPR063SZftoYFrXSmS-w-vkEw9eSPD9G8AhAjYRGXs" />
      </Helmet>
    );
  }
  render() {
    let json = {};
    json.globaldata = this.props.globaldata ? JSON.parse(this.props.globaldata) : '';
    json.pageJson = (this.props.pageJson) ? JSON.parse(this.props.pageJson) : '';
    if (this.props.globaldata) {
      let timestamp = JSON.parse(this.props.globaldata).time;
      console.log(timestamp, 'timestamp')
    }
    return (
      <div className="page-wrapper">
        <HomePage content={json.pageJson} />
        <NewsRoomChart content={json.pageJson} />
      </div>
    )
  }
} 