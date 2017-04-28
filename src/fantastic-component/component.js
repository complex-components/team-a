import React, { Component } from 'react';
import './component.css';
export class FantasticComponent extends Component {
    constructor(props){
        super(props);
    }

    render() {
        console.log('FantasticComponent ', this.props.state.get('user').get('name'));

        return (
            <div className="fantastic-component">
                <p>Implement stuff here</p>
            </div>
        );
    }
}