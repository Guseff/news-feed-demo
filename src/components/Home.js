import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import List from './List';

class Home extends Component {
  render() {
    const { articles } = this.props;

    return (<div className="">
      <List articles={articles} />
    </div>);
  }
}

function mapStateToProps(state) {
  return {
    articles: state.articles.articles,
  };
}

Home.propTypes = {
  articles: PropTypes.any.isRequired,
};

export default connect(mapStateToProps)(Home);
