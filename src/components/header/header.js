import React, { Component } from 'react'
import './header.css'
import logo from '../../assets/Slogo.jpg'

export default class header extends Component {
  scrollTop() {
    window.scrollTo(0, 0)
  }
  render() {
    return (
      <header className="header-wrapper">
        <span className="logo" onClick={() => this.scrollTop()}><img src={logo} alt="logo" /></span>
        <nav className="navigation">
          <ul>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#recognitions">Recognitions</a></li>
          </ul>
        </nav>
        <p className="scrollTop" onClick={() => this.scrollTop()}><i className="fa fa-angle-double-up" aria-hidden="true"></i></p>
      </header>
    )
  }
}
