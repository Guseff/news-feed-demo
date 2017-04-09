import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import LogForm from '../components/LogForm';
import RegForm from '../components/RegForm';
import * as LogRegActions from '../actions/LogRegActions';

class Login extends Component {
  render() {
    const { logErr, logName, logPass, loggedUser } = this.props;
    const { regErr, regName, regPass, regEmail } = this.props;

    return (
      <div>
        <h3>Login, please:</h3>
        <LogForm
          logErr={logErr} logName={logName} logPass={logPass} loggedUser={loggedUser}
          changeLogName={this.props.changeLogName} changeLogPass={this.props.changeLogPass}
          loginUser={this.props.loginUser}
        />
        <h3>...or register Now:</h3>
        <RegForm
          regErr={regErr} regName={regName} regEmail={regEmail} regPass={regPass}
          changeRegEmail={this.props.changeRegEmail} changeRegName={this.props.changeRegName} changeRegPass={this.props.changeRegPass}
          regNewUser={this.props.regNewUser}
        />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    logErr: state.login.logErr,
    logName: state.login.logName,
    logPass: state.login.logPass,
    regErr: state.register.regErr,
    regName: state.register.regName,
    regEmail: state.register.regEmail,
    regPass: state.register.regPass,
    loggedUser: state.login.loggedUser,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    regNewUser: bindActionCreators(LogRegActions.regNewUser, dispatch),
    changeRegName: bindActionCreators(LogRegActions.changeRegName, dispatch),
    changeRegPass: bindActionCreators(LogRegActions.changeRegPass, dispatch),
    changeRegEmail: bindActionCreators(LogRegActions.changeRegEmail, dispatch),
    changeLogName: bindActionCreators(LogRegActions.changeLogName, dispatch),
    changeLogPass: bindActionCreators(LogRegActions.changeLogPass, dispatch),
    loginUser: bindActionCreators(LogRegActions.loginUser, dispatch),
  };
}

Login.propTypes = {
  logErr: PropTypes.object.isRequired,
  logName: PropTypes.string.isRequired,
  logPass: PropTypes.string.isRequired,
  regErr: PropTypes.object.isRequired,
  regName: PropTypes.string.isRequired,
  regPass: PropTypes.string.isRequired,
  regEmail: PropTypes.string.isRequired,
  loggedUser: PropTypes.string.isRequired,

  changeLogName: PropTypes.func.isRequired,
  changeLogPass: PropTypes.func.isRequired,
  regNewUser: PropTypes.func.isRequired,
  changeRegName: PropTypes.func.isRequired,
  changeRegPass: PropTypes.func.isRequired,
  changeRegEmail: PropTypes.func.isRequired,
  loginUser: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
