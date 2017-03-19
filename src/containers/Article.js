import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { getArticle } from '../actions/HomeActions';

class Article extends Component {

  componentDidMount() {
    const { articles } = this.props;
    const article = articles[this.props.params.id] || {};

    getArticle(article.url);
  }

  render() {
    const { articles } = this.props;
    const article = articles[this.props.params.id] || {};

    return (<div className="Article">
      <h3>{article.title}</h3>
      <p><b><i>{article.author}</i></b></p>
      <p>{article.description}</p>
    </div>);
  }
}

function mapStateToProps(state) {
  return {
    articles: state.articles.articles,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getArticle: bindActionCreators(getArticle, dispatch),
  };
}

Article.propTypes = {
  articles: PropTypes.array.isRequired,
  params: PropTypes.any.isRequired,
  // getArticle: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Article);
