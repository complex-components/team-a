import React, {Component} from 'react';
import './component.css';

export class AddArticle extends Component {
    constructor(props) {
        super(props);
    }

    addArticle = (event) => {
        event.preventDefault();
        console.log('time to redirect');
        this.props.addArticle(this.refs['message'].value);
    };

    render() {
        return (
            <div className="article">
                <form onSubmit={this.addArticle}>
                    <fieldset>
                        <legend>Ny post</legend>
                        <input ref="message" type="text" placeholder="message" required/>
                        <button type="submit">Legg til</button>
                    </fieldset>
                </form>
            </div>
        );
    }
}