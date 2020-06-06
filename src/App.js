import React, { Component } from 'react';
import './App.css'
import HomePage from './components/homePage/homePage'
import NewsRoomChart from './components/newsChart/newsChart'

export default class App extends Component {
  render() {
    return (
      <div className="page-wrapper">
        <HomePage />
        <NewsRoomChart />
      </div>
    )
  }
} 