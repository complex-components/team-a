import React, { Component } from 'react';
import './component.css';

export default class DisplayCommentComponent extends Component {
    constructor(props) {
        super(props);

        //this.props.name = this.props.name || "Test"
        //this.props.time = this.props.time || new Date().getDate()
        //this.props.message = this.props.message || "Testmessage"

    }

    render() {
        return (
            <div className="display-comments-component">
                <div>
                    <legend>{this.props.name} commented at {this.props.time}:</legend><br />
                    <pre>{this.props.message}</pre><br />
                    <hr />
                    <div className="comments-feedback">
                        What did you feel about this comment? --heregoesfeedback--
                    </div>
                </div>
            </div>
        );
    }
}