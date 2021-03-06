import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import './index.css';
import App from './components/App';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

const Root = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={App}/>
      <Route path="/login" component={Login}/>
      <Route path="/register" component={Register}/>
    </Switch>
  </Router>
)

ReactDOM.render(<Root />, document.getElementById('root'));

serviceWorker.unregister();
