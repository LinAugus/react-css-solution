import React from 'react';
import './Home.less';

import Button from '../../components/Button';

class Home extends React.Component {
    render() {
        return (
            <div styleName="title">
                <p>{this.props.name}</p>
                <Button>Normal</Button>
                <Button type="success">Success</Button>
            </div>       
        )
    }
}

export default Home;