import React, { Component } from 'react';
import logo from '../logo.svg';
import './App.css';
import Home from '../page/Home';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="header">
          <img src={logo} className="logo" alt="logo" />
          <h1 className="title">Welcome to React</h1>
        </header>
        <p className="intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Home name="Hello React" />
      </div>
    );
  }
}

export default App;
