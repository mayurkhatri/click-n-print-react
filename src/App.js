import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e){
    e.preventDefault();
    console.log("button clicked");
  }

  testEvent(e){
    e.preventDefault();
    console.log("div clicked");
    document.getElementById("displayDiv").innerHTML = e.target.innerHTML + " clicked";
  }

  render() {
    return (
      <div className="App">
        <h1>Please click on any text message</h1>
        <br/>
        <div onClick={this.testEvent}>First message</div>
        <div onClick={this.testEvent}>Second message</div>
        <div onClick={this.testEvent}>Third message</div>
        <div onClick={this.testEvent}>Fourth message</div>
        <div onClick={this.testEvent}>Hey there</div>
        <br/>
        <div id="displayDiv"></div>
      </div>
    );
  }
}

export default App;
