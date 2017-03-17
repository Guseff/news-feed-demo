import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';


class Article extends Component {
  render() {
    const { articles } = this.props;
    const index = articles[this.props.params.id];

    return (<div className="Article">
      <h3>{index.title}</h3>
      <p><b><i>{index.author}</i></b></p>
      <p>{index.description}</p>
    </div>);
  }
}

function mapStateToProps(state) {
  return {
    articles: state.articles.articles,
  };
}

function mapDispatchToProps(dispatch) {
  return {

  };
}

Article.propTypes = {
  articles: PropTypes.array.isRequired,
  params: PropTypes.any.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Article);
