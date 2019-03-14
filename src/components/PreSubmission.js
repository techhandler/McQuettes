/**
 * Created by sumil on 14/3/19.
 */

import React, { Component } from "react";

export default class PreSubmission extends Component {

  render() {
    console.log("this.propsss",this.props);
    let { location: { state = [], attempted = 0, totalQues = 0 } } = this.props;
    state.forEach((b) => {
      if (b && b.selectedAns >= 0)
        attempted++;
      totalQues++;
    })
    return (
      <div className="submission-block">
        <div>
          <h2>THANK YOU</h2>
          <div>
            <div style={{ textAlign: "center" }}>Summary</div>
            <div>Total Questions = {totalQues}</div>
            <div>Attempted Questions = {attempted}</div>
          </div>
          <p style={{ margin: "4% 2% 0" }}>Your Responses Have Been Submitted.</p>
        </div>
      </div>
    )
  }
}