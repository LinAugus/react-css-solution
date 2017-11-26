import React, { Component } from 'react';
import styled from 'styled-components';

// 通过props改变样式
const Button = styled.button`
    background: ${props => props.primary ? 'palevioletred': 'white' };
    color: ${props => props.primary ? 'white' : 'palevioletred' };

    font-size: 1em;
    margin: 1em;
    padding: 0.25em 1em;
    border: 2px solid palevioletred;
    border-radius: 3px;
    outline: 0;
    cursor: pointer;
`;

// 继承
const BaseButton = styled.button`
    background: white;
    color: #333;
    font-size: 1em;
    margin: 1em;
    padding: 0.25em 1em;
    border: 2px solid palevioletred;
    border-radius: 3px;
    outline: 0;
    cursor: pointer;
`;

const PrimaryButton = BaseButton.extend`
    background: #13bc13;
    color: white;
    border: none;
`;


class ButtonWrapper extends Component {
    render() {
        return (
            <div>
                <Button>Normal</Button>
                <Button primary>Primary</Button>
                <BaseButton>BaseButton</BaseButton>
                <PrimaryButton>PrimaryButton</PrimaryButton>
            </div>
        )
    }
}

export default ButtonWrapper;