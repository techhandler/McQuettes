import React, { Component } from "react";
import "./App.css";
import question from "./questionJson.json";
import Question from "./components/Question";

class App extends Component {
  state = { question, selectedQues: 0 };

  render() {
    console.log(this.state.selectedQues);
    return (
      <div className="App">
        <Question data={this.state.question} selectedQues={this.state.selectedQues}/>
        { this.state.selectedQues > 0 &&
        <button onClick={() => this.setState({ selectedQues: this.state.selectedQues - 1 })}>Back</button>}
        { this.state.selectedQues < this.state.question.length - 1 &&
        <button onClick={() => this.setState({ selectedQues: this.state.selectedQues + 1 })}>Next</button>}
      </div>
    );
  }
}

export default App;
