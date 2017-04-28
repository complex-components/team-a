import React from 'react'
import ReactDOM from 'react-dom'
import {Router, Route, IndexRoute, browserHistory} from 'react-router'
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import App from './App'
import reducer from './reducer';
import './index.css'

import FantasticComponent from './fantastic-component/component'

const store = createStore(reducer);

ReactDOM.render(
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path="/" component={App}>
                <IndexRoute component={FantasticComponent}/>
                <Route path="/home" component={FantasticComponent}/>
            </Route>
        </Router>
    </Provider>,
  document.getElementById('root')
);
