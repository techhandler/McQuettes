import React, { Component } from "react";

export default class Question extends Component {
  render() {
    let { data, selectedQues, selectAns } = this.props;
    return (
      <div style={{ border: '1px solid black' }} key={selectedQues}>
        <p>{data.question}</p>
        {data.options.map((a, i) => <p><input
          type="radio"
          name="ans"
          id={i}
          value={a}
          onClick={() => {
            selectAns({ selectedQues, selectedAns: i })
          }}
          checked={data.selectedAns === i}
        />{a}</p>)}
        {/*<p>{JSON.stringify(this.props)}</p>*/}
      </div>
    )
  }
}