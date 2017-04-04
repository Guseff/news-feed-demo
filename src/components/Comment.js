import React, { Component, PropTypes } from 'react';

export default class Comment extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { comment } = this.props;
    return (<div className="comment-block">
      <div>
        <p className="author"><i><b>{comment.author}</b> wrote:</i></p>
        <p>{comment.text}</p>
      </div>
    </div>);
  }
}

Comment.propTypes = {
  comment: PropTypes.object.isRequired,
};
