import React, { Component } from 'react'
import './homePage.css'
import axios from 'axios'
export default class homePage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      frontPageData: '',
      finalVotes: 0
    }
  }
  componentDidMount() {
    axios.get('https://hn.algolia.com/api/v1/search?tags=front_page').then(data => this.setState({ frontPageData: data.data.hits }))
  }
  upVote() {
  }
  hideNews(event) {
    this.state.frontPageData.splice(parseInt(event), 1)
    this.setState({
      frontPageData: this.state.frontPageData
    })
  }
  render() {
    let frontPageTable = this.state.frontPageData && this.state.frontPageData.map((item, index) => {
      return (
        <div className="newsroom-table-header" key={index} data-index={index}>
          <span>{item.num_comments}</span>
          <span>{item.points}</span>
          <span className="up-vote" onClick={() => this.upVote()}><span></span></span>
          <span><a href={item.url ? (item.url) : ''}>{item.title}</a> <span className="url">{item.url ? '(' + item.url + ')' : ''} by</span> <span className="author">{item.author}</span> <span className="time">{item.created_at_i} ago</span> <span className="hide" onClick={() => this.hideNews(index)}>[hide]</span></span>
        </div>
      )
    })
    return (
      <div className="newsroom-wrapper">
        <div className="newsroom-table-header">
          <span>Comments</span>
          <span>Vote Count</span>
          <span>UpVote</span>
          <span>News Details</span>
        </div>
        {frontPageTable}
      </div>
    )
  }
}
