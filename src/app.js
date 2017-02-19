
import React from 'react';
import ReactDOM from 'react-dom';

import Menu from './components/Menu.jsx';
import App from './containers/App.js';
import Admin from './components/Admin.js';
import Home from './components/Home.js';
import About from './components/About.js';

import { Router, Route, IndexRoute, browserHistory } from 'react-router';

ReactDOM.render(
  <Router history={ browserHistory }>
    <Route path='/' component={ App }>
      <IndexRoute component={ Home } />
      <Route path='about' component={ About } />
      <Route path='admin' component={ Admin } />
    </Route>
  </Router>,
  document.getElementById('app')
);