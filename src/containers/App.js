import React, { PropTypes, Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import * as LogRegActions from '../actions/LogRegActions';

class App extends Component {
  render() {
    const { loggedUser } = this.props;
    return (
      <div className="container">
        <div className="head">
          <div className="logo">Test Application a-la News Agregator :)</div>
          <div className="menu">
            <ul>
              <li><Link to="/">Home</Link></li>
              <li>
                {(loggedUser.length) ?
                  <Link onClick={this.props.logOut}>Logout</Link> :
                  <Link to="/login">Login / Register</Link>
                }
              </li>
              <li><Link to="/about">About</Link></li>
            </ul>
          </div>
        </div>
        {(loggedUser.length) ? <div className="username">You logged as {loggedUser}</div> : null}
        <div className="content">
          {/* добавили вывод потомков */}
          {this.props.children}
        </div>
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.object.isRequired,
  loggedUser: PropTypes.string.isRequired,
  logOut: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
  return {
    loggedUser: state.login.loggedUser,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    logOut: bindActionCreators(LogRegActions.logOut, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
