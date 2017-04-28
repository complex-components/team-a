import React, { Component } from 'react';
import './component.css';

export default class PostCommentsComponent extends Component {
    constructor(props) {
        super(props);
        console.log(props);
        this.message = '';
    }

    addComment() {
        const obj = {
            id: new Date().getTime(),
            postId: this.props.parent,
            message: this.message
        }
        this.props.addComment();
    }

    updateMessage(evt) {
        this.message = evt.target.value;
    }

    render() {
        return (
            <div className="post-comments-component">
                <div>
                    <form>
                        <legend>Skriv en ny kommentar til parent post {this.props.parent}:</legend>
                        <fieldset>
                        <textarea onChange={this.updateMessage} ></textarea>
                        <br />
                        <button type="submit" onSubmit={this.addComment()}>Kommentér!</button>
                        </fieldset>
                    </form>
                </div>
            </div>
        );
    }
}
