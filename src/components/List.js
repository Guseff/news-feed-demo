import React, { Component, PropTypes } from 'react';

import ArticleEl from './ArticleEl';
import ART_PER_PAGE from '../constants/constants';

export default class List extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { articles, offset } = this.props;

    return (<div className="">
      {articles.slice(offset, ART_PER_PAGE).map(
        (article, index) =>
          <ArticleEl
            key={index} itemid={index} article={article}
          />,
      )}
    </div>);
  }
}

List.propTypes = {
  articles: PropTypes.array.isRequired,
  offset: PropTypes.number.isRequired,
};
