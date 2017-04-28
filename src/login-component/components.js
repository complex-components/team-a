import React, {Component} from 'react';
import {browserHistory} from 'react-router'
import './component.css';

export class Login extends Component {
    constructor(props) {
        super(props);
    }
    updateLoginForm = (event) => {
        if (event.target) {
            console.log('value ', event.target.value);
            this.props.updateLogin(event.target.value);
        }
    };

    login = (event) => {
        event.preventDefault();
        console.log('time to redirect');
        console.log(this.props.state.get('user').get('name'));
        browserHistory.push('/home');
    };

    render() {
        return (
            <div className="login">
                <form onSubmit={this.login}>
                    <fieldset>
                        <legend>Login</legend>
                        <input type="text" placeholder="name" required onBlur={this.updateLoginForm}/>
                        <button type="submit">Login</button>
                    </fieldset>
                </form>
            </div>
        );
    }
}