import React, { Component } from "react";
import "./App.css";
import question from "./questionJson.json";
import Question from "./components/Question";
import QuesPanel from "./components/QuesPanel";

class App extends Component {
  state = { question, selectedQues: 0 };

  selectAns({ selectedQues, selectedAns }) {
    this.setState(state => {
      state.question[selectedQues].selectedAns = selectedAns;
      return state;
    });
  }

  handleSubmit() {
    console.log("Submitted");
  }

  handlePanelClick(selectedQues) {
    console.log("selectedQues", selectedQues);
    this.setState({selectedQues});
  }

  render() {
    console.log("sss", this.state.question);
    return (
      <div className="App">
        <div style={{ width: "60%", margin: "auto" }}>
          <h1 style={{ textAlign: "center" }}>McQuettes</h1>
          <div style={{ border: "1px solid black" }}>
            <QuesPanel data={this.state.question} handlePanelClick={a => this.handlePanelClick(a)}/>
          </div>
          <Question
            data={this.state.question[this.state.selectedQues]}
            selectedQues={this.state.selectedQues}
            selectAns={e => this.selectAns(e)}
          />
          <div style={{ width: "30%", margin: "0 auto" }}>
            {(this.state.selectedQues > 0 &&
            <button
              onClick={() => this.setState({ selectedQues: this.state.selectedQues - 1 })}
              style={{ float: "left" }}
            >
              Back
            </button>) ||
            <button style={{ background: "grey" }}>Back</button>}
            {(this.state.selectedQues < this.state.question.length - 1 &&
            <button
              onClick={() => this.setState({ selectedQues: this.state.selectedQues + 1 })}
              style={{ float: "right" }}
            >
              Next
            </button>) ||
            <button style={{ float: "right", background: "green" }} onClick={() => this.handleSubmit()}>Submit</button>}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
