import React, { Component } from 'react';
import logo from '../logo.svg';
import styled, {keyframes} from 'styled-components';
import Home from '../Page/Home';
import Button from '../Components/Button';

const AppWrapper = styled.div`
  text-align: center;
`

const Header = styled.header`
  background-color: rgb(223, 76, 76);
  height: 150px;
  padding: 20px;
  color: white;
`;

const Title = styled.h1`
  font-size: 1.5em;
`

const logoSpin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const Logo = styled.img`
  animation: ${logoSpin} infinite 20s linear;
  height: 80px;
`

const Intro = styled.p`
  font-size: large;
`;

class App extends Component {
  render() {
    return (
      <AppWrapper>
        <Header>
          <Logo src={logo} alt="logo" />
          <Title>Welcome to React</Title>
        </Header>
        <Intro> React CSS solution </Intro>
        <Home name="Hello React" />
        <Button />
      </AppWrapper>
    );
  }
}

export default App;
