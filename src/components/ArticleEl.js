import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

export default class ArticleEl extends Component {
  constructor(props) {
    super(props);

    this.showArticle = this.showArticle.bind(this);
  }

  showArticle(e) {
    e.preventDefault();
    this.props.showArticle(this.props.itemid);
  }

  render() {
    const { article, itemid } = this.props;
    return (<div className="article-block">
      <div>
        <img alt="" src={article.imgURL} className="article-img" />
        <h4>{article.title}</h4>
        <p><i>{article.author}</i></p>
        <p>{article.description}</p>
      </div>
      <Link to="/article">Read More</Link>
    </div>);
  }
}

ArticleEl.propTypes = {
  article: PropTypes.object.isRequired,
  showArticle: PropTypes.func.isRequired,
  itemid: PropTypes.number.isRequired,
};
