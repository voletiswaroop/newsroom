import React, { Fragment, Component } from 'react';
import CanvasJSReact from './canvasjs.react';
import axios from 'axios'
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

export default class newsChart extends Component {
	constructor() {
		super();
		this.state = {
			newsData: ''
		};
	}

	componentDidMount() {
		axios.get('https://hn.algolia.com/api/v1/search?tags=front_page').then(data => this.setState({ newsData: data.data.hits }))
	}

	render() {
		let newsChartData = []
		this.state.newsData ? this.state.newsData && this.state.newsData.map(item => {
			newsChartData.push({
				y: parseInt(item.points),
				label: item.objectID
			})
		}) : ''
		console.log(newsChartData, 'newsChartData');
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
		console.log(newsChart, 'newsChart');

		return (
			<div className="newsroom-chart">
				<CanvasJSChart options={newsChart} />
			</div>
		);
	}
}
