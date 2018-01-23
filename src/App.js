import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class PrintMessage extends Component {
  divClicked(e){
    e.preventDefault();
    document.getElementById("displayDiv").innerHTML = e.target.innerHTML + " clicked";
  }
  render(){
    return(
      <div onClick={this.divClicked}>{this.props.message}</div>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Please click on any text message</h1>
        <br/>
        <PrintMessage message="Here we go" />
        <PrintMessage message="First message" />
        <PrintMessage message="Second message" />
        <PrintMessage message="Third message" />
        <PrintMessage message="Fourth message" />
        <PrintMessage message="Hey there" />
        <br/>
        <div id="displayDiv"></div>
      </div>
    );
  }
}

export default App;
