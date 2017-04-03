import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { getArticle, leaveNewComment } from '../actions/HomeActions';
import Form from '../components/Form';

class Article extends Component {
  render() {
    const { articles } = this.props;
    const article = articles[this.props.params.id] || {};

    return (<div className="Article">
      <div className="wrap">
        <img alt="" src={article.LimgURL} className="l-article-img" />
        <h3>{article.title}</h3>
        <p><b><i>{article.author}</i></b></p>
        <p>{article.description}</p>
      </div>
      <div className="clear" />
      <Form leaveNewComment={leaveNewComment} />
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
    leaveNewComment: bindActionCreators(leaveNewComment, dispatch),
  };
}

Article.propTypes = {
  articles: PropTypes.array.isRequired,
  params: PropTypes.any.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Article);
