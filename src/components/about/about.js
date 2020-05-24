import React, { Component } from 'react'
import './about.css'
import Swaroop from '../../assets/swaroop-voleti.png'

export default class about extends Component {
  render() {
    return (
      <section className="about-wrapper" id="about-me">
        <div className="banner-wrapper">
          <div className="overlay-section">
            <div className="overlay-container">
              <h1 className="title">Hi! I'm Swaroop. <br /> Nice to meet you.</h1>
              <p>I write robust code to convert your <i>ideas or designs</i> into <i>reality</i>.</p>
            </div>
          </div>
        </div>
        <div className="container">
          <h3 className="user-profile"><img src={Swaroop} alt="Swaroop gupta voleti" />About me</h3>
          <p>Since beginning my journey as a frontend Developer nearly 9 years ago, I have very strong experience in building responsive/adaptive user interface web apps (Desktops, Tablets &amp; Mobiles). In my experience I have worked on many projects (each project is from scrach) in different industries like E-Commerce, Mobile, Banking and Healthcare. I'm quietly confident, naturally curious, and perpetually working on improving my chops one design problem at a time.</p>
        </div>
        <div className="project-development-process container">
          <div className="research">
            <h4><i className="fab fa-searchengin"></i>Research</h4>
            <div>Start understanding the client requirements and break down requirement into multiple small sections and digdeeper into the requirement</div>
          </div>
          <div className="analyze">
            <h4><i className="fas fa-file-signature"></i>Analyze</h4>
            <div>Put findings from the research and buliding test cases for the client requirements and start building POC's and Spikes</div>
          </div>
          <div className="develop">
            <h4><i className="fas fa-laptop-code"></i>Develop</h4>
            <div>I will put all my findings from the research and analyze phases are utilized to convert your <i>ideas or designs</i> into website and that runs seemlessly across all the browsers and devices using latest web trands.</div>
          </div>
        </div>
      </section>
    )
  }
}
