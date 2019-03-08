import React, { Component } from 'react';
import './App.css';
import question from './questionJson.json';
import Question from './components/Question';

class App extends Component {
  state = {question,selectedQues:0};

  render() {
    return (
      <div className="App">
        <Question data={this.state.question} selectedQues={this.state.selectedQues}/>
        <button onClick={()=>this.setState({selectedQues:this.state.selectedQues-1})}>Back</button>
        <button onClick={()=>this.setState({selectedQues:this.state.selectedQues+1})}>Next</button>
      </div>
    );
  }
}

export default App;
