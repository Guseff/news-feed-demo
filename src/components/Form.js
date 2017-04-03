import React, { Component, PropTypes } from 'react';

export default class Form extends Component {
  constructor(props) {
    super(props);

    this.leaveNewComment = this.leaveNewComment.bind(this);
  }

  leaveNewComment() {
    this.props.leaveNewComment();
  }

  render() {
    return (
      <div className="form">
        <h4>You can leave a comment:</h4>
        <div className="input">
          <input placeholder="Enter your Name ..." />
        </div>
        <div className="input">
          <input placeholder="Enter your E-Mail ..." />
        </div>
        <div className="field">
          <textarea placeholder="Enter your comment here..." />
        </div>
        <button className="button" onClick={this.leaveNewComment} >Send</button>
      </div>
    );
  }
}

Form.propTypes = {
  leaveNewComment: PropTypes.func.isRequired,
};
