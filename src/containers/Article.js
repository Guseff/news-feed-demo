import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';


class Article extends Component {
  render() {
    const { activeArticle, articles } = this.props;

    return (<div className="Article">
      <h3>{articles[activeArticle].title}</h3>
    </div>);
  }
}

function mapStateToProps(state) {
  return {
    activeArticle: state.articles.activeArticle,
    articles: state.articles.articles,
  };
}

function mapDispatchToProps(dispatch) {
  return {

  };
}

Article.propTypes = {
  articles: PropTypes.array.isRequired,
  activeArticle: PropTypes.number.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Article);
