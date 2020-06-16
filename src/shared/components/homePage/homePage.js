import React, { Component } from 'react'
import homepageCSS from './homePage.css'

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
          <h2>
            <a href={item.url ? (item.url) : ''}><summary>{item.title}</summary></a>
            <span className={homepageCSS["url"]}> {item.url ? '(' + item.url + ')' : ''} by </span>
            <span className={homepageCSS["author"]}> {item.author} </span>
            <time className={homepageCSS["time"]}> {item.created_at_i} ago </time>
            <span className={homepageCSS["hide"]} onClick={() => this.hideNews(index)}> [hide]</span>
          </h2>
        </div>
      )
    })
    return (
      <section className={homepageCSS["newsroom-wrapper"]} >
        <div className={homepageCSS["newsroom-table-header"]} >
          <span>Comments</span>
          <span>Vote Count</span>
          <span>UpVote</span>
          <h2>News Details</h2>
        </div>
        {frontPageTable}
      </section>
    )
  }
}
