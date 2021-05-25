import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {
  Route,
  BrowserRouter as Router,
  Switch
} from 'react-router-dom';


ReactDOM.render(
  <Router>
    <React.StrictMode>
      <Switch>
        <Route exact path="/" component={App} />
      </Switch>
    </React.StrictMode>
  </Router>,
  document.getElementById('root'));
