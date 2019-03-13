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
          <div style={{ textAlign: "center" }}>
            <button style={{ background: "green", width: "60%" }} onClick={() => this.props.handleSubmit()}>
              Submit
            </button>
          </div>
          <div style={{width:"100%", lineHeight:"3em"}}>
            <span className="ques-panel-button" style={style.attempted}/> - Attempted
          </div>
          <div style={{width:"100%"}}>
            <span className="ques-panel-button"/> - Not Attempted
          </div>
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
