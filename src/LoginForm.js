import React, {Component} from 'react';
import LoginFields from './LoginFields';
import LoginButton from './LoginButton';
import NemIdLogin from './NemIdLogin';
import './LoginForm.css'

class LoginForm extends Component {
    constructor() {
        super();
        this.state = {
            name: '',
            password: ''
        }
    }

    render() {
        const {name, password} = this.state;
        return (
            <div className="login-form">
                <LoginFields name={name} password={password} onFieldChange={this.onFieldChange}/>
                <div className="login-actions-wrapper">
                    <LoginButton onButtonClick={this.onButtonClick}
                                 disabled={!this.isValid(name, password)}/>
                    <NemIdLogin/>
                </div>
            </div>
        );
    }

    isValid(name, value) {
        return name.trim() !== '' && value.trim() !== '';
    }

    onButtonClick = () => {
        const {name, password} = this.state;
        if (!this.isValid(name, password)) {
            return;
        }

        this.props.handleLogin(name, password);
    }

    onFieldChange = (e) => {
        let {name, value} = e.target,
            newStateValue = {};

        newStateValue[name] = value;

        this.setState(newStateValue);
    }
}

export default LoginForm;
