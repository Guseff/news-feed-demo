import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router';

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="head">
          <div className="logo">Test Application a-la News Agregator :)</div>
          <div className="menu">
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/admin">Admin</Link></li>
              <li><Link to="/about">About</Link></li>
            </ul>
          </div>
        </div>

        <div className="content">
          {/* добавили вывод потомков */}
          {this.props.children}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps)(App)
