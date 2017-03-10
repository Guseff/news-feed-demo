import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

class Admin extends Component {
  render() {
    return (
      <div className="Admin">
        Admin is ...{this.props.user.name} {this.props.user.surname}.
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    user: state.user,
  };
}

Admin.propTypes = {
  user: PropTypes.obj.isRequired,
};

export default connect(mapStateToProps)(Admin);
