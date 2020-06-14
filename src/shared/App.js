import React, { Component } from 'react';
import './App.css'
import Helmet from 'react-helmet';
// import favicon from './assets/favicon.ico';
import UniversalComponent from './UniversalComponent';

export default class App extends Component {

  setMetainfo() {
    return (
      <Helmet>
        <title>NewsRoom</title>
        <meta name="title" content="title" />
        <meta name="description" content="description" />
        <meta name="abstract" content="abstract" />
        <meta http-equiv="content-language" content="content_language" />
        <meta name="keywords" content="keywords" />
        <meta name="robots" content="robots" />
        <meta name="rights" content="rights" />
        <meta name="referrer" content="referrer" />
        <link rel="canonical" href="canonical" />
        <link rel="shortlink" href="shortlink" />
        {/* <link rel="shortcut icon" href={favicon} type="image/x-icon" /> */}
        {/* <link rel="apple-touch-icon" href={favicon} /> */}
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
        <UniversalComponent name="homePage" content={json.pageJson} />
        <UniversalComponent name="newsChart" content={json.pageJson} />
      </div>
    )
  }
} 