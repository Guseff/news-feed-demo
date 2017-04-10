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
    const { err, inpAuthor, inpEmail, inpText, parentID, leaveNewComment, loggedUser, token } = this.props;
    if (!err.text) {
      leaveNewComment(loggedUser, inpText, parentID, token);
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
    const { err, inpAuthor, inpEmail, inpText, loggedUser } = this.props;
    return (
      <div className="form">
        <h4>Hallo, {loggedUser}, you can leave a comment:</h4>
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
  loggedUser: PropTypes.string.isRequired,
  token: PropTypes.string.isRequired,
};

Form.defaultProps = {
  parentID: '',
};
