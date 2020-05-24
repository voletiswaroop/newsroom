import React, { Component } from 'react'
import './recognitions.css'

export default class recognitions extends Component {
  render() {
    return (
      <section className="recoginitions-wrapper" id="recognitions">
        <div className="container">
          <h3><i className="fas fa-award"></i>Awards &amp; Recognitions</h3>
          <ul className="recoginitions-list">
            <li><i className="fa fa-circle"></i>Athenahealth
                <div><i className="fa fa-ellipsis-h" aria-hidden="true"></i>Received Extra mile award twice</div>
              <div><i className="fa fa-ellipsis-h" aria-hidden="true"></i>Hackathon runner up</div>
            </li>
            <li><i className="fa fa-circle"></i>Bankbazaar.com
             <div><i className="fa fa-ellipsis-h" aria-hidden="true"></i>Received Best performer award</div>
              <div><i className="fa fa-ellipsis-h" aria-hidden="true"></i>Hackathon winner </div>
            </li>
            <li><i className="fa fa-circle"></i>Innoswift Solutions
             <div><i className="fa fa-ellipsis-h" aria-hidden="true"></i>Received Best performer award</div>
            </li>
          </ul>
        </div>
      </section>
    )
  }
}
