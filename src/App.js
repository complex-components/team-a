import React, { Component } from 'react'
//import FantasticComponent from './fantastic-component/component'
import DisplayCommentComponent from './display-comments-component/component'
import PostCommentsComponent from './post-comments-component/component'
import logo from './logo.svg'
import './App.css'

class App extends Component {
  render () {
    return (
      <div className='App'>
        <div className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <h2>Team A!</h2>
        </div>
        <div className='component-test'>
          <PostCommentsComponent parent="postid" />
          <DisplayCommentComponent name="test" time="28/04/2017" message="testmessage" /> 
        </div>
      </div>
    )
  }
}

export default App
