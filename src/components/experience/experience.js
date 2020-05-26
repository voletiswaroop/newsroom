import React, { Component } from 'react'
import './experience.css'
import ahi from '../../assets/companyLogos/ah-logo.jpeg'
import bblogo from '../../assets/companyLogos/bb-logo.png'
import huaweiLogo from '../../assets/companyLogos/huawei-logo.png'
import innoswiftLogo from '../../assets/companyLogos/innoswift.png'

export default class experience extends Component {
  render() {
    return (
      <section className="experience-wrapper" id="experience">
        <div className="container">
          <h3><i className="fa fa-motorcycle" aria-hidden="true"></i>Career Journey</h3>
          <ul className="experience-list">
            <li>
              <a href="https://www.athenahealth.com/" target="_blank">
                <img src={ahi} alt="Athenahealth" className="company-logo" />
                <div className="designation-details">
                  <h4 className="designation">Senior Member of Technical Staff (SMTS)</h4>
                  <p className="company-name">Athenahealth</p>
                  <p className="experience-details">Oct'2017 - Present</p>
                </div>
              </a>
            </li>
            <li>
              <a href="https://www.bankbazaar.com/" target="_blank">
                <img src={bblogo} alt="bankbazaar" className="company-logo" />
                <div className="designation-details">
                  <h4 className="designation">Senior Web Developer</h4>
                  <p className="company-name">BankBazaar</p>
                  <p className="experience-details">Jul'2015 - Oct'2017</p>
                </div>
              </a>
            </li>
            <li>
              <a href="https://www.hihonor.com/in/" target="_blank">
                <img src={huaweiLogo} alt="Huawei Technologies" className="company-logo" />
                <div className="designation-details">
                  <h4 className="designation">UI Developer</h4>
                  <p className="company-name">Huawei Technologies</p>
                  <p className="experience-details">Dec'2014 - Jul'2015</p>
                </div>
              </a>
            </li>
            <li>
              <a href="http://innoswift.com/" target="_blank">
                <img src={innoswiftLogo} alt="Innoswift" className="company-logo" />
                <div className="designation-details">
                  <h4 className="designation">Web Desginer &amp; Developer</h4>
                  <p className="company-name">Innoswift Solutions</p>
                  <p className="experience-details">Jan'2012 - Dec'2014</p>
                </div>
              </a>
            </li>
          </ul>
        </div>
      </section>
    )
  }
}
