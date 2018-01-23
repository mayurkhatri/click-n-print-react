import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  divClicked(e){
    e.preventDefault();
    document.getElementById("displayDiv").innerHTML = e.target.innerHTML + " clicked";
  }

  render() {
    return (
      <div className="App">
        <h1>Please click on any text message</h1>
        <br/>
        <div onClick={this.divClicked}>First message</div>
        <div onClick={this.divClicked}>Second message</div>
        <div onClick={this.divClicked}>Third message</div>
        <div onClick={this.divClicked}>Fourth message</div>
        <div onClick={this.divClicked}>Hey there</div>
        <br/>
        <div id="displayDiv"></div>
      </div>
    );
  }
}

export default App;
