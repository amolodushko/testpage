import React, {Component} from 'react';
import './LoginHeader.css';
import FontAwesome from 'react-fontawesome';
import BetLogo from './BetLogo'


class LoginHeader extends Component {
    render() {
        return (
            <div className="login-header">
                <button className="back-button" onClick={this.props.onBackClicked}>
                    <FontAwesome className='back-arrow' size='2x' name='chevron-left'/>
                </button>
                <div className="logo-wrapper">
                    <BetLogo/>
                </div>
            </div>
        );
    }
}

export default LoginHeader;
