import React, { Component } from "react";

export default class QuestionPanel extends Component {
  render() {
    let { data } = this.props;
    console.log("data", data);
    return (
      <div>
        {data &&
          data.map((a, i) => (
            <span
              style={a.selectedAns >= 0 ? style.attempted : style.notAttempted}
              onClick={() => this.props.handlePanelClick(i)}
            >
              {i + 1}
            </span>
          ))}
      </div>
    );
  }
}

let style = {
  attempted: {
    background: "green",
    color: "white",
    cursor: "pointer",
    padding: "0 .5em"
  },
  notAttempted: {
    background: "white",
    cursor: "pointer"
  }
};
