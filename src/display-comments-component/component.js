import React, { Component } from 'react';
import './component.css';

export default class DisplayCommentComponent extends Component {
    constructor(props) {
        super(props);
        this.id = this.props.id;
        console.log(this.id)

    }

    render() {
        return (
            <div className="display-comments-component">
                <div>
                    <legend>{this.props.name}</legend><br />
                    <pre>{this.props.message}</pre><br />
                </div>
            </div>
        );
    }
}