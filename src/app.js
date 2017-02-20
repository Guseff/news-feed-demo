
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import Menu from './components/Menu';
import App from './containers/App';
import Admin from './components/Admin';
import Home from './components/Home';
import About from './components/About';

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path="about" component={About} />
      <Route path="admin" component={Admin} />
    </Route>
  </Router>,
  document.getElementById('app'),
);
