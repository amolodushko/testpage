import React, {Component} from 'react';
import './LoginButton.css';

class LoginButton extends Component {
    render() {
        const {disabled, onButtonClick} = this.props,
            disabledCls = disabled ? 'disabled' : '',
            className = `login-button ${disabledCls}`;

        return (
            <button onClick={onButtonClick} className={className}>Log Ind</button>
        );
    }
}

export default LoginButton;
