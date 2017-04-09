import React, { Component, PropTypes } from 'react';

export default class LogForm extends Component {
  constructor(props) {
    super(props);

    this.changeNameF = this.changeNameF.bind(this);
    this.changePassF = this.changePassF.bind(this);
    this.loginUserF = this.loginUserF.bind(this);
  }

  changeNameF(e) {
    this.props.changeLogName(e.target.value);
  }
  changePassF(e) {
    this.props.changeLogPass(e.target.value);
  }
  loginUserF() {
    this.props.loginUser(this.props.logName, this.props.logPass);
  }

  render() {
    const { logErr, logName, logPass } = this.props;

    return (
      <div className="form center wo-title">
        <div className={'input ' + (logErr.name ? 'red' : '')}>
          <input value={logName} onChange={this.changeNameF} placeholder="Enter your Name ..." />
        </div>
        <div className={'input ' + (logErr.pass ? 'red' : '')}>
          <input value={logPass} onChange={this.changePassF} placeholder="Enter your Password ..." />
        </div>
        <button onClick={this.loginUserF} className="button">Login</button>
      </div>
    );
  }
}

LogForm.propTypes = {
  logErr: PropTypes.object.isRequired,
  logName: PropTypes.string.isRequired,
  logPass: PropTypes.string.isRequired,
  changeLogName: PropTypes.func.isRequired,
  changeLogPass: PropTypes.func.isRequired,
  loginUser: PropTypes.func.isRequired,
};

