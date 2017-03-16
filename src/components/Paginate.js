import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

import {
  PAGE_DOWN,
  PAGE_UP,
} from '../constants/constants';

export default class Paginate extends Component {
  constructor(props) {
    super(props);

    this.prevBtnClick = this.prevBtnClick.bind(this);
    this.nextBtnClick = this.nextBtnClick.bind(this);
  }

  prevBtnClick(e) {
    e.preventDefault();
    this.props.makePageDown(this.props.offset);
  }

  nextBtnClick(e) {
    e.preventDefault();
    this.props.makePageUp(this.props.offset);
  }

  render() {
    const { articles, offset, makePageDown, makePageUp } = this.props;

    return (<div className="paginate">
      <Link onClick={this.prevBtnClick} >&larr;  Previos</Link>
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
