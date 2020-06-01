import React, { Component } from 'react'
import './about.css'
import Swaroop from '../../assets/swaroop-voleti.png'
import SwaroopVoleti from '../../assets/swaroop-voleti-img.png'
import Resume from '../../assets/senior-web-designer.pdf'

export default class about extends Component {
  render() {
    return (
      <section className="about-wrapper" id="about-me">
        <div className="banner-wrapper container">
          <div className="left-aligned">
            <h1 className="title"><span>Hi!</span><br />I'm Swaroop. <br /> Nice to meet you.</h1>
            <p>I write robust code to convert your <i>ideas &amp; designs</i> into <i>reality</i>.</p>
            <ul className="follow-section">
              <li><a href="https://www.linkedin.com/in/voletiswaroop/" target="_blank" title="LinkedIn profile"><i className="fab fa-linkedin"></i></a></li>
              <li><a href="https://github.com/voletiswaroop" target="_blank" title="github profile"><i className="fa fa-github" aria-hidden="true"></i></a></li>
              <li><a href={Resume} download title="Download resume" target="_blank"><i className="fa fa-download left"></i></a></li>
              <li><a target="_blank" href="mailto:voleti.swaroop@gmail.com" title="contact me"><i className="fa fa-envelope-o" aria-hidden="true"></i></a></li>
            </ul>
          </div>
          <img src={SwaroopVoleti} alt="Swaroop voleti" />
        </div>
        <div className="container">
          <h3 className="user-profile"><img src={Swaroop} alt="Swaroop gupta voleti" />About me</h3>
          <p>I started my journey as a Frontend Developer in 2012. I have extensive experience in building responsive and adaptive user interfaces for web apps catering to a spectrum of devices such as Desktops, Tablets &amp; Mobiles. I have worked on many projects in different sectors such as E-Commerce, Mobile, Banking and Healthcare, all of them are from scratch. I am inquisitive, confident and perpetually working on improving my chops one design problem at a time.</p>
        </div>
        <div className="project-development-process container">
          <div className="research">
            <h4><i className="fab fa-searchengin"></i>Research</h4>
            <div>Start understanding the client requirements and break down requirement into multiple small sections and digdeeper into the requirement</div>
          </div>
          <div className="analyze">
            <h4><i className="fas fa-file-signature"></i>Analyze</h4>
            <div>Implement findings from the research and building test cases for the client requirements and start creating POC's and Spikes</div>
          </div>
          <div className="develop">
            <h4><i className="fas fa-laptop-code"></i>Develop</h4>
            <div>Curate all the findings from the research and analyse which phases are to be utilised to convert the <i>ideas and designs</i> into website and that runs seamlessly across all the browsers and devices using latest web trends.</div>
          </div>
        </div>
      </section>
    )
  }
}
