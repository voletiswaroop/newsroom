import React, { Component } from 'react';
import './App.css'
import Header from './components/header/header'
import AboutMe from './components/about/about'
import SkillSet from './components/skillset/skills'
import Experience from './components/experience/experience'
import Projects from './components/projects/projects'
import Recognitions from './components/recognitions/recognitions'
import Education from './components/education/education'
import Footer from './components/footer/footer'

export default class App extends Component {
  render() {
    return (
      <div className="page-wrapper">
        <Header />
        <AboutMe />
        <SkillSet />
        {/* <Experience /> */}
        <Projects />
        <Recognitions />
        <Education />
        <Footer />
      </div>
    )
  }
} 