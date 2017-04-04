import React, { Component, PropTypes } from 'react';

import Comment from './Comment';

export default class CommentList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { comments } = this.props;

    return (<div className="">
      {comments.map(
        (comment, index) =>
          <Comment
            key={index} itemid={index} comment={comment}
          />,
      )}
    </div>);
  }
}

CommentList.propTypes = {
  comments: PropTypes.array.isRequired,
};
