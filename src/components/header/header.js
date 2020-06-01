import React, { Component } from 'react'
import './header.css'
import logoIcon from '../../assets/logo-icon.svg'
import logoName from '../../assets/logo-name.svg'

export default class header extends Component {
  scrollTop() {
    window.scrollTo(0, 0)
  }
  subnavigation(e) {
    if (e.currentTarget.closest('.header-wrapper').classList.contains('show-subnav')) {
      e.currentTarget.closest('.header-wrapper').classList.remove('show-subnav')
    } else {
      e.currentTarget.closest('.header-wrapper').classList.add('show-subnav')
    }
  }
  render() {
    return (
      <header className="header-wrapper">
        <span className="logo" onClick={() => this.scrollTop()}><img src={logoIcon} alt="logo" /><img src={logoName} alt="logo" /></span>
        <div className="navlines" onClick={(e) => this.subnavigation(e)}> <span></span><span></span><span></span></div>
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
