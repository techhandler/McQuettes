import React, { Component } from "react";
import "./App.css";
import question from "./questionJson.json";
import Question from "./components/Question";

class App extends Component {
  state = { question, selectedQues: 0 };

  selectAns({ selectedQues, selectedAns }) {
    this.setState(state => {
      state.question[selectedQues].selectedAns = selectedAns;
      return state;
    });
  }

  handleSubmit(){
    console.log("Submitted");
  }

  render() {
    console.log("sss", this.state.question);
    return (
      <div className="App">
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
            </button>)||<button style={{ float: "right", background: "green" }} onClick={()=>this.handleSubmit()}>Submit</button>}
        </div>
      </div>
    );
  }
}

export default App;
