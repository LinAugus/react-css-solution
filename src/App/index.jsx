import React, { Component } from 'react';
import logo from '../logo.svg';
import './App.less';
import Home from '../Page/Home';

class App extends Component {
  render() {
    return (
      <div styleName="wrapper">
        <header styleName="header">
          <img src={logo} styleName="logo" alt="logo" />
          <h1 styleName="title">Welcome to React</h1>
        </header>
        <p styleName="intro">
          Less + babel-react-css-modules + bem
        </p>
        <Home name="Hello React" />
      </div>
    );
  }
}

export default App;
