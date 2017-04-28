import React, { Component } from 'react';
import './component.css';

export default class PostCommentsComponent extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="post-comments-component">
                <div>
                    <form>
                        <legend>Skriv en ny kommentar til parent post {this.props.parent}:</legend>
                        <fieldset>
                        <textarea></textarea>
                        <br />
                        <button type="submit">Kommentér!</button>
                        </fieldset>
                    </form>
                </div>
            </div>
        );
    }
}
