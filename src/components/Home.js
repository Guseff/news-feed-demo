import React, { Component } from 'react';
import { connect } from 'react-redux';

class Home extends Component {
  render() {
    return (
      <div className="Home">
        Titleff - <b>{this.props.article.title}</b><br />
        Author - <b>{this.props.article.author}.</b>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    article: state.article,
  };
}

export default connect(mapStateToProps)(Home);
