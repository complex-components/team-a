import React, {Component} from 'react'
import logo from './logo.svg'
import './App.css'

class App extends Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <div className='App'>
                <div className='App-header'>
                    <img src={logo} className='App-logo' alt='logo'/>
                    <h2>Team A!</h2>
                </div>
                <div className='component-test'>
                    {this.props.children}
                </div>
            </div>
        )
    }
}

export default App
