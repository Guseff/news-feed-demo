import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

class Home extends Component {
  render() {
    return (
      <div className="Home">
        Title - <b>{this.props.article.title}</b><br />
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

Home.propTypes = {
  article: PropTypes.object.isRequired,
};

export default connect(mapStateToProps)(Home);
