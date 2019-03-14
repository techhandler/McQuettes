import React, { Component } from "react";

export default class Question extends Component {
  render() {
    let { data, selectedQues, selectAns } = this.props;
    return (
      <div className="question-tab"  key={selectedQues}>
        <p><span>Q{selectedQues + 1}. </span><span>{data.question}</span></p>
        {data.options.map((a, i) => <p className="options-label" key={i} onClick={() => {
          selectAns({ selectedQues, selectedAns: i })
        }}><input
          type="radio"
          name="ans"
          id={i}
          value={a}
          checked={data.selectedAns === i}
          style={{backgroundColor:"white"}}
        />{a}</p>)}
        {/*<p>{JSON.stringify(this.props)}</p>*/}
      </div>
    )
  }
}