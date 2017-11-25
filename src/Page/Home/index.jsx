import React from 'react';
import style from './Home.scss';

const Home = (props) => (
    <div className={style.title}>
        {props.name}
    </div>
)

export default Home;