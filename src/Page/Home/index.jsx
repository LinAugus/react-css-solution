import React from 'react';
import styled from 'styled-components';

const HomeWrapper = styled.div`
    color: #eee;
    font-size: 24px;
`

const Home = (props) => (
    <HomeWrapper>
        {props.name}
    </HomeWrapper>
)

export default Home;