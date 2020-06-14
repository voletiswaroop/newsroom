import React, { Component } from 'react'
import homepageCSS from './homePage.css'
import axios from 'axios'

export default class homePage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      finalVotes: 0,
      frontPageData: ''
    }
  }

  hideNews(event) {
    this.state.frontPageData.splice(parseInt(event), 1)
    this.setState({
      frontPageData: this.state.frontPageData
    })
  }
  render() {
    this.state.frontPageData = this.props.content && this.props.content ? this.props.content : '';
    let frontPageTable = Array.from(this.state.frontPageData).map((item, index) => {
      return (
        <div className={homepageCSS["newsroom-table-header"]} key={index} data-index={index}>
          <span>{item.num_comments}</span>
          <span>{item.points}</span>
          <span className={homepageCSS["up-vote"]} onClick={() => this.upVote()}><span></span></span>
          <span>
            <a href={item.url ? (item.url) : ''}>{item.title} </a>
            <span className={homepageCSS["url"]}> {item.url ? '(' + item.url + ')' : ''} by </span>
            <span className={homepageCSS["author"]}> {item.author} </span>
            <span className={homepageCSS["time"]}> {item.created_at_i} ago </span>
            <span className={homepageCSS["hide"]} onClick={() => this.hideNews(index)}> [hide]</span>
          </span>
        </div>
      )
    })
    return (
      <div className={homepageCSS["newsroom-wrapper"]} >
        <div className={homepageCSS["newsroom-table-header"]} >
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
