import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './Button.less';

class Button extends PureComponent {
    // constructor() {
    //     this.state = {};
    // }

    static propTypes = {
        type: PropTypes.oneOf(['success', 'normal']),
        onClick: PropTypes.func,
    };

    static defaultProps = {
        type: 'normal',
    };

    // componentWillMount() {}
    // componentWillReceiveProps() {}
    // componentDidMount() {}
    // componentWillUnmount() {}
    // componentDidCatch(){}

    handleClick = () => {
        // handle click event
        // this => Button
    }

    render() {
        console.log('render');

        let { type, children, styleName, className } = this.props;

        const classes = classNames(styleName, className, 'prefix-button', 'prefix-button-' + type);

        console.log(classes);

        return (
            <span styleName={classes} onClick={this.handleClick}>
                { children }
            </span >
        );
    }
}

export default Button; 