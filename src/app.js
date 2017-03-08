import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';

import './assets/style.css';

import App from './containers/App';
import Menu from './components/Menu';
import Admin from './components/Admin';
import Home from './components/Home';
import About from './components/About';

const store = createStore(() => {}, {});

render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Home} />
        <Route path="about" component={About} />
        <Route path="admin" component={Admin} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('app'),
);
