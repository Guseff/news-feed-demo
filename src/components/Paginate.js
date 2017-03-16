import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

import {
  PAGE_DOWN,
  PAGE_UP,
} from '../constants/constants';
import PageNum from './PageNum';

export default class Paginate extends Component {
  constructor(props) {
    super(props);

    this.prevBtnClick = this.prevBtnClick.bind(this);
    this.nextBtnClick = this.nextBtnClick.bind(this);
  }

  prevBtnClick(e) {
    e.preventDefault();
    this.props.makePageDown(this.props.offset, this.props.articles.length);
  }

  nextBtnClick(e) {
    e.preventDefault();
    this.props.makePageUp(this.props.offset, this.props.articles.length);
  }

  render() {
    const { articles, offset, makePageDown, makePageUp } = this.props;

    return (<div className="paginate">
      <Link onClick={this.prevBtnClick} >&larr;  Previos</Link>
      <PageNum articles={articles} offset={offset} />
      <Link onClick={this.nextBtnClick} >Next  &rarr;</Link>
    </div>);
  }
}

Paginate.propTypes = {
  articles: PropTypes.array.isRequired,
  offset: PropTypes.number.isRequired,
  makePageDown: PropTypes.func.isRequired,
  makePageUp: PropTypes.func.isRequired,
};
