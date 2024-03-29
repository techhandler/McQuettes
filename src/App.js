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
    this.props.history.push('/submission', question);
  }

  handlePanelClick(selectedQues) {
    this.setState({ selectedQues });
  }

  render() {
    console.log("sss", this.props);
    return (
      <div className="App">
        <div style={{ width: "90%", margin: "auto" }}>
          <h1 style={{ textAlign: "center" }}>McQuettes</h1>

          <div style={{ display: 'flex' }}>
            <QuesPanel data={this.state.question} handlePanelClick={a => this.handlePanelClick(a)} handleSubmit={()=>this.handleSubmit()}/>
            <div style={{ flex: 1 }}/>
            <div style={{ flex: 15 }}>

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
                <button className="disabled-btn" >Back</button>}
                {(this.state.selectedQues < this.state.question.length - 1 &&
                <button
                  onClick={() => this.setState({ selectedQues: this.state.selectedQues + 1 })}
                  style={{ float: "right" }}
                >
                  Next
                </button>) ||
                <button style={{ float: "right" }} className="disabled-btn" >Next</button>}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
