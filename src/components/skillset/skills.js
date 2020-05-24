import React, { Component } from 'react'
import './skills.css'

export default class skills extends Component {
  render() {
    return (
      <section className="skillset-wrapper" id="skills">
        <div className="container">
          <h3><i className="fas fa-code"></i>I Play With</h3>
          <div className="skillset-container">
            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>Sass</li>
              <li>Less</li>
              <li>Photoshop</li>
              <li>Bootstrap</li>
              <li>Material</li>
            </ul>
            <ul>
              <li>ReactJs</li>
              <li>Javascript</li>
              <li>ES6</li>
              <li>Rest API</li>
              <li>Basic NodeJs</li>
              <li>jQuery</li>
              <li>JSON</li>
              <li>Webpack</li>
            </ul>
            <ul>
              <li>Babel.js</li>
              <li>Google Analytics</li>
              <li>Adobe Analytics</li>
              <li>Jest</li>
              <li>A/B Testing</li>
              <li>Debugging</li>
              <li>Website Performance / Optimisation</li>
            </ul>
            <ul>
              <li>Responsive layouts</li>
              <li>Adaptive design</li>
              <li>Wraith</li>
              <li>Pixel perfect</li>
              <li>Browser Stack</li>
              <li>VQA</li>
              <li>SEO</li>
            </ul>
            <ul>
              <li>Bitbucket</li>
              <li>Codepen</li>
              <li>Github</li>
              <li>Terminal</li>
              <li>Firebug</li>
            </ul>
          </div>
        </div>
      </section>
    )
  }
}
