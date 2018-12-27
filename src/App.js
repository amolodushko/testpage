import React, {Component} from 'react';
import './App.css';
import LoginHeader from './LoginHeader';
import LoginForm from './LoginForm';

class App extends Component {
    render() {
        return (
            <div className="login-page-body">
                <LoginHeader onBackClicked={this.onBackClicked}/>
                <LoginForm handleLogin={this.login}/>
            </div>
        );
    }

    onBackClicked = () => {
        console.log('Go Back!');
    }

    login = (name, password) => {
        console.log('do login for', name, password);
    }
}

export default App;
