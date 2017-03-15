import React, { Component, PropTypes } from 'react';

export default class ArticleEl extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { article } = this.props;
    return (<div className="article-block">
      <img alt="" src={article.imgURL} className="article-img" />
      <h4>{article.title}</h4>
      <p><i>{article.author}</i></p>
      <p>{article.description}</p>
    </div>);
  }
}

ArticleEl.propTypes = {
  article: PropTypes.object.isRequired,
};
