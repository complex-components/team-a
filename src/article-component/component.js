import React, { Component } from 'react';
import './component.css';

import DisplayCommentsComponent from '../display-comments-component/component';
//import PostCommentsComponent from '../post-comments-component/component';

export class ArticleComponent extends Component {
    constructor(props){
        super(props);
        this.postList = this.props.state.get('posts').filter(f => f.type === "post");
    }

    render() {
        return (
            <div className="article-component">
                <ul>
                {this.postList.map(element => (
                    <li>{element.message}<br />
                    <DisplayCommentsComponent key={element.id} name={this.props.state.get('user').get('name')} message={element.message} />
                    </li>
                ))}
                </ul>
            </div>
        );
    }
}