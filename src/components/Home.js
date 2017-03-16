import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import List from './List';
import Paginate from './Paginate';
import * as inputActions from '../actions/HomeActions';

class Home extends Component {
  render() {
    const { articles, offset } = this.props;
    const { makePageUp, makePageDown } = this.props;

    return (<div className="">
      <Paginate articles={articles} offset={offset} makePageUp={makePageUp} makePageDown={makePageDown} />
      <List articles={articles} offset={offset} />
    </div>);
  }
}

function mapStateToProps(state) {
  return {
    articles: state.articles.articles,
    offset: state.pagination.offset,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    makePageUp: bindActionCreators(inputActions.makePageUp, dispatch),
    makePageDown: bindActionCreators(inputActions.makePageDown, dispatch),
  };
}

Home.propTypes = {
  articles: PropTypes.array.isRequired,
  offset: PropTypes.number.isRequired,
  makePageUp: PropTypes.func.isRequired,
  makePageDown: PropTypes.func.isRequired,
};

export default connect(mapStateToProps)(Home);
