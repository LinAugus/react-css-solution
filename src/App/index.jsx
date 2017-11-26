import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import logo from '../logo.svg';
import './App.less';
import Home from '../page/Home';
import Demo from '../page/Demo';

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
        <Link to="/demo">Go Antd</Link>
        <Route path="/demo" component={Demo}/>
      </div>
    );
  }
}

export default App;
