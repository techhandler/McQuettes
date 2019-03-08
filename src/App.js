import React, { Component } from "react";
import "./App.css";
import question from "./questionJson.json";
import Question from "./components/Question";

class App extends Component {
  state = { question, selectedQues: 0 };

  selectAns ({ selectedQues, selectedAns }) {
    this.setState((state)=>{state.question[selectedQues].selectedAns = selectedAns;return state});
  }

  render() {
    console.log("sss",this.state.question);
    return (
      <div className="App">
        <Question data={this.state.question[this.state.selectedQues]} selectedQues={this.state.selectedQues} selectAns={(e)=>this.selectAns(e)}/>
        { this.state.selectedQues > 0 &&
        <button onClick={() => this.setState({ selectedQues: this.state.selectedQues - 1 })}>Back</button>}
        <span>{this.state.selectedQues}</span>
        { this.state.selectedQues < this.state.question.length - 1 &&
        <button onClick={() => this.setState({ selectedQues: this.state.selectedQues + 1 })}>Next</button>}
      </div>
    );
  }
}

export default App;
