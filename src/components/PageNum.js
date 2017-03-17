import React, { Component, PropTypes } from 'react';

import { ART_PER_PAGE } from '../constants/constants';

export default class PageNum extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { articles, offset } = this.props;

    return (<div className="pagenum">
      Articles {offset + 1} - {offset + ART_PER_PAGE < articles.length ? offset + ART_PER_PAGE : articles.length} from {articles.length}
    </div>);
  }
}

PageNum.propTypes = {
  articles: PropTypes.array.isRequired,
  offset: PropTypes.number.isRequired,
};
