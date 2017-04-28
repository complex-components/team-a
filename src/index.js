import React from 'react'
import ReactDOM from 'react-dom'
import {Router, Route, IndexRoute, browserHistory} from 'react-router'
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import App from './App'
import reducer from './reducer';
import './index.css'

import Login from './login-component/container'
import FantasticComponent from './fantastic-component/container'
import ArticleComponent from './article-component/container'

const store = createStore(reducer);

ReactDOM.render(
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path="/" component={App}>
                <IndexRoute component={Login}/>
                <Route path="/home" component={ArticleComponent}/>
            </Route>
        </Router>
    </Provider>,
  document.getElementById('root')
);
