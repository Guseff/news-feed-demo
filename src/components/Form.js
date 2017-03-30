import React, { Component, PropTypes } from 'react';

export default class Form extends Component {
  render() {
    return (
      <div className="form">
        <h4>You can leave a comment here:</h4>
        <div className="input">
          <input placeholder="Enter your Name here..." />
        </div>
        <div className="input">
          <input placeholder="Enter your E-Mail here..." />
        </div>
        <div className="field">
          <textarea placeholder="Enter your comment here..." />
        </div>
        <div className="button" >Send</div>
      </div>
    );
  }
}

Form.propTypes = {

};
