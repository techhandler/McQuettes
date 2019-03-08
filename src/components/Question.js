import React, { Component } from "react";

export default class Question extends Component {
  render() {
    let { data, selectedQues } = this.props;
    return (
      <div style={{border:'1px solid black'}}>
        <p>{data[selectedQues].question}</p>
        <p>{JSON.stringify(this.props)}</p>
      </div>
    )
  }
}