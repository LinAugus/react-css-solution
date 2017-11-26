import React from 'react';
import './Home.less';

class Home extends React.Component {
    render() {
        return (
            <div styleName="title">
                <p>{this.props.name}</p>
            </div>       
        )
    }
}

export default Home;