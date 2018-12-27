import React, { Component } from 'react';
import './LoginFields.css';

class LoginFields extends Component {
    render() {
        const {name,password, onFieldChange} = this.props;
        return (
            <div className="form-fields-wrapper">
                <input onChange={onFieldChange} placeholder="Brugernavn" className="user-name loginfield" name="name" value={name}/>
                <input onChange={onFieldChange} placeholder="Kodeord"  className="password loginfield" name="password" value={password} />
                <a href="#" className="forgot-password">Glemt kodeord?</a>
            </div>
        );
    }
}

export default LoginFields;
