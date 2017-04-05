import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

import { ART_PER_PAGE } from '../constants/constants';

export default class ArticleEl extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { article, itemid, offset } = this.props;
    const id = article._id;
    const url = '/article/' + id;
    return (<div className="article-block">
      <div>
        <img alt="" src={article.imgURL} className="article-img" />
        <h4>{article.title}</h4>
        <p><i>{article.author}</i></p>
        <p>{article.description}</p>
      </div>
      <div className="clear" />
      <div className="link">
        <Link to={url} >Read More</Link>
      </div>
    </div>);
  }
}

ArticleEl.propTypes = {
  article: PropTypes.object.isRequired,
  itemid: PropTypes.number.isRequired,
  offset: PropTypes.number.isRequired,
};
