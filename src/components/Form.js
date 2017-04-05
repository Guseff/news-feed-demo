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
    if (!this.props.inpAuthor.length || !this.props.inpEmail.length || !this.props.inpText.length) {
      alert('All fields is Required');
    } else {
      this.props.leaveNewComment(this.props.inpAuthor, this.props.inpEmail, this.props.inpText, this.props.parentID);
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
    const { inpAuthor, inpEmail, inpText } = this.props;
    return (
      <div className="form">
        <h4>You can leave a comment:</h4>
        <div className="input">
          <input value={inpAuthor} onChange={this.changeAuthorF} placeholder="Enter your Name ..." />
        </div>
        <div className="input">
          <input value={inpEmail} onChange={this.changeEmailF} placeholder="Enter your E-Mail ..." />
        </div>
        <div className="field">
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
};

Form.defaultProps = {
  parentID: '',
};
