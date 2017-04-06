import React, { Component, PropTypes } from 'react';

export default class Form extends Component {
  constructor(props) {
    super(props);

    this.leaveNewComment = this.leaveNewComment.bind(this);
    this.changeAuthorF = this.changeAuthorF.bind(this);
    this.changeEmailF = this.changeEmailF.bind(this);
    this.changeTextF = this.changeTextF.bind(this);
  }

  leaveNewComment() {
    const { err, inpAuthor, inpEmail, inpText, parentID, leaveNewComment } = this.props;
    if (!err.name && !err.email && !err.text) {
      leaveNewComment(inpAuthor, inpEmail, inpText, parentID);
    }
  }
  changeAuthorF(e) {
    this.props.changeAuthor(e.target.value);
  }
  changeEmailF(e) {
    this.props.changeEmail(e.target.value);
  }
  changeTextF(e) {
    this.props.changeText(e.target.value);
  }

  render() {
    const { err, inpAuthor, inpEmail, inpText } = this.props;
    return (
      <div className="form">
        <h4>You can leave a comment:</h4>
        <div className={'input ' + (err.name ? 'red' : '')}>
          <input value={inpAuthor} onChange={this.changeAuthorF} placeholder="Enter your Name ..." />
        </div>
        <div className={'input ' + (err.email ? 'red' : '')}>
          <input value={inpEmail} onChange={this.changeEmailF} placeholder="Enter your E-Mail ..." />
        </div>
        <div className={'field ' + (err.text ? 'red' : '')}>
          <textarea value={inpText} onChange={this.changeTextF} placeholder="Enter your comment here..." />
        </div>
        <button className="button" onClick={this.leaveNewComment} >Send</button>
      </div>
    );
  }
}

Form.propTypes = {
  leaveNewComment: PropTypes.func.isRequired,
  changeAuthor: PropTypes.func.isRequired,
  inpAuthor: PropTypes.string.isRequired,
  changeEmail: PropTypes.func.isRequired,
  inpEmail: PropTypes.string.isRequired,
  changeText: PropTypes.func.isRequired,
  inpText: PropTypes.string.isRequired,
  parentID: PropTypes.string,
  err: PropTypes.object.isRequired,
};

Form.defaultProps = {
  parentID: '',
};
