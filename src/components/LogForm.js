import React, { Component, PropTypes } from 'react';

export default class LogForm extends Component {
  constructor(props) {
    super(props);

    this.changeNameF = this.changeNameF.bind(this);
    this.changePassF = this.changePassF.bind(this);
  }

  changeNameF(e) {
    this.props.changeLogName(e.target.value);
  }
  changePassF(e) {
    this.props.changeLogPass(e.target.value);
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
        <button className="button">Login</button>
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
};

