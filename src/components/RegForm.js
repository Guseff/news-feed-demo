import React, { Component, PropTypes } from 'react';

export default class RegForm extends Component {
  constructor(props) {
    super(props);

    this.changeNameF = this.changeNameF.bind(this);
    this.changePassF = this.changePassF.bind(this);
    this.changeEmailF = this.changeEmailF.bind(this);
    this.regNewUserF = this.regNewUserF.bind(this);
  }

  changeNameF(e) {
    this.props.changeRegName(e.target.value);
  }
  changePassF(e) {
    this.props.changeRegPass(e.target.value);
  }
  changeEmailF(e) {
    this.props.changeRegEmail(e.target.value);
  }
  regNewUserF() {
    this.props.regNewUser(this.props.regName, this.props.regEmail, this.props.regPass);
  }

  render() {
    const { regErr, regName, regEmail, regPass } = this.props;
    return (
      <div className="form center">
        <h4>Please, fill this form for register:</h4>
        <div className={'input ' + (regErr.name ? 'red' : '')}>
          <input value={regName} onChange={this.changeNameF} placeholder="Enter your Name ..." />
        </div>
        <div className={'input ' + (regErr.email ? 'red' : '')}>
          <input value={regEmail} onChange={this.changeEmailF} placeholder="Enter your E-mail ..." />
        </div>
        <div className={'input ' + (regErr.pass ? 'red' : '')}>
          <input value={regPass} onChange={this.changePassF} placeholder="Enter your Password ..." />
        </div>
        <button className="button" onClick={this.regNewUserF}>Register</button>
      </div>
    );
  }
}

RegForm.propTypes = {
  regErr: PropTypes.object.isRequired,
  regName: PropTypes.string.isRequired,
  regEmail: PropTypes.string.isRequired,
  regPass: PropTypes.string.isRequired,
  changeRegName: PropTypes.func.isRequired,
  changeRegEmail: PropTypes.func.isRequired,
  changeRegPass: PropTypes.func.isRequired,
  regNewUser: PropTypes.func.isRequired,
};
