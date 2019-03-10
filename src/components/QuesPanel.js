import React, { Component } from "react";

export default class QuestionPanel extends Component {
  render() {
    let { data } = this.props;
    return (
      <div style={{ border: "1px solid black", flex : 3,display:"flex", flexWrap: "wrap"}}>
        {data &&
          data.map((a, i) => (
            <span
              key={i}
              style={a.selectedAns >= 0 ? style.attempted : style.notAttempted}
              onClick={() => this.props.handlePanelClick(i)}
            >
              {i + 1}
            </span>
          ))}
        <button style={{ background: "green" }} onClick={() => this.props.handleSubmit()}>
          Submit</button>
      </div>
    );
  }
}


let defaultS = {
  cursor: "pointer",
  padding: "0 .5em",
  border : "1px solid black",
  margin: "2%",
  fontSize : "1.5em",
  height:"1.1em",
  flex:1
};

let style = {
  attempted: {
    ...defaultS,
    background: "blue",
    color: "white"
  },
  notAttempted: {
    ...defaultS,
    background: "white"
  }
};
