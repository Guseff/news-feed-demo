import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

import {
  OFFSET,
  PAGE_DOWN,
  PAGE_UP,
} from '../constants/constants';

export default class Paginate extends Component {
  constructor(props) {
    super(props);

    this.prevBtnClick = this.prevBtnClick.bind(this);
    this.nextBtnClick = this.nextBtnClick.bind(this);
  }

  prevBtnClick(offset) {
    this.props.makePageDown(offset);
  }

  nextBtnClick(offset) {
    this.props.makePageUp(offset);
  }

  render() {
    const { articles, offset } = this.props;

    return (<div className="paginate">
      <Link onClick={this.prevBtnClick} >&larr;  Previos</Link>
      <Link>Next  &rarr;</Link>
    </div>);
  }
}

Paginate.propTypes = {
  articles: PropTypes.array.isRequired,
  offset: PropTypes.number.isRequired,
  makePageDown: PropTypes.func.isRequired,
  makePageUp: PropTypes.func.isRequired,
};
