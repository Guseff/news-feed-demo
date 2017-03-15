import React, { Component, PropTypes } from 'react';

import ArticleEl from './ArticleEl';

export default class List extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { articles } = this.props;

    return (<div className="">
      {articles.map(
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
};
