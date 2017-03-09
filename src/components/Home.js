import React, { Component } from 'react';
import { connect } from 'react-redux';

class Home extends Component {
  render() {
    return (
      <div className="Home">
        Title - {this.props.article.title}<br />
        Author - {this.props.article.author}.
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
