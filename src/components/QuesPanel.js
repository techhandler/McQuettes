import React, { Component } from "react";

export default class QuestionPanel extends Component {
  render() {
    let { data } = this.props;
    return (
      <div style={{ flex: 3, display: "flex", flexDirection: "column" }}>
        <div style={{ flex: 1 }}>
          {data &&
          data.map((a, i) => (
            <span
              className="ques-panel-button"
              key={i}
              style={a.selectedAns >= 0 ? style.attempted : {}}
              onClick={() => this.props.handlePanelClick(i)}
            >
              {i + 1}
            </span>
          ))}
        </div>
        <div style={{ flex: 1 }}>
          <p style={{ textAlign: "center" }}>
            <button style={{ background: "green", width: "60%" }} onClick={() => this.props.handleSubmit()}>
              Submit
            </button>
          </p>
          <p>
            <span className="ques-panel-button" style={style.attempted}/> - Attempted
          </p>
          <p>
            <span className="ques-panel-button"/> - Not Attempted
          </p>
        </div>
      </div>
    );
  }
}

let style = {
  attempted: {
    background: "blue",
    color: "white"
  }
};
