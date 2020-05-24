import React, { Component } from 'react'
import './footer.css'
import Resume from '../../assets/senior-web-designer.pdf'

export default class footer extends Component {

  render() {
    return (
      <footer className="footer-wrapper">
        <span className="left-section">&copy; 2014 - {new Date().getFullYear()} Swaroop Gupta Voleti</span>
        <ul className="right-section">
          <li><a href="https://www.linkedin.com/in/voletiswaroop/" target="_blank" title="LinkedIn profile"><i className="fab fa-linkedin"></i></a></li>
          <li><a href="https://github.com/voletiswaroop" target="_blank" title="github profile"><i className="fa fa-github" aria-hidden="true"></i></a></li>
          <li><a href={Resume} download title="Download resume" target="_blank"><i className="fa fa-download left"></i></a></li>
          <li><a target="_blank" href="mailto:voleti.swaroop@gmail.com" title="contact me"><i className="fa fa-envelope-o" aria-hidden="true"></i></a></li>
        </ul>
      </footer>
    )
  }
}
