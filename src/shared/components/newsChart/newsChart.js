import React, { Component } from 'react';
import CanvasJSReact from './canvasjs.react';
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

export default class newsChart extends Component {
  constructor() {
    super();
    this.state = {
      newsData: ''
    };
  }

  render() {
    let newsChartData = []
    let pageData = this.props.content && this.props.content ? this.props.content : '';
    Array.from(pageData).map(item => {
      newsChartData.push({
        y: parseInt(item.points),
        label: item.objectID
      })
    })
    const newsChart = {
      animationEnabled: true,
      exportEnabled: false,
      theme: "light2",
      title: {
        text: ""
      },
      axisY: {
        title: "Votes",
        includeZero: true
      },
      axisX: {
        title: "ID",
        interval: 2
      },
      data: [{
        type: "line",
        name: '',
        toolTipContent: "ID {label} : Votes {y}",
        dataPoints: newsChartData
      }]
    }
    return (
      <div className="newsroom-chart">
        <CanvasJSChart options={newsChart} />
      </div>
    );
  }
}
