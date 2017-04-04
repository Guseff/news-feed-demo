import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { getArticle, leaveNewComment, changeAuthor, changeEmail, changeText } from '../actions/HomeActions';
import Form from '../components/Form';

class Article extends Component {
  render() {
    const { articles } = this.props;
    const { inpAuthor, inpEmail, inpText } = this.props;
    // const { changeAuthor, changeEmail, changeText } = this.props;
    const article = articles[this.props.params.id] || {};

    return (<div className="Article">
      <div className="wrap">
        <img alt="" src={article.LimgURL} className="l-article-img" />
        <h3>{article.title}</h3>
        <p><b><i>{article.author}</i></b></p>
        <p>{article.description}</p>
      </div>
      <div className="clear" />
      <Form
        leaveNewComment={this.props.leaveNewComment}
        changeAuthor={this.props.changeAuthor}
        changeEmail={this.props.changeEmail}
        changeText={this.props.changeText}
        inpAuthor={inpAuthor} inpEmail={inpEmail} inpText={inpText}
        artTitle={article.title}
      />
    </div>);
  }
}

function mapStateToProps(state) {
  return {
    articles: state.articles.articles,
    inpAuthor: state.form.inpAuthor,
    inpEmail: state.form.inpEmail,
    inpText: state.form.inpText,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    leaveNewComment: bindActionCreators(leaveNewComment, dispatch),
    changeAuthor: bindActionCreators(changeAuthor, dispatch),
    changeEmail: bindActionCreators(changeEmail, dispatch),
    changeText: bindActionCreators(changeText, dispatch),
  };
}

Article.propTypes = {
  articles: PropTypes.array.isRequired,
  params: PropTypes.any.isRequired,
  leaveNewComment: PropTypes.func.isRequired,
  changeAuthor: PropTypes.func.isRequired,
  inpAuthor: PropTypes.string.isRequired,
  changeEmail: PropTypes.func.isRequired,
  inpEmail: PropTypes.string.isRequired,
  changeText: PropTypes.func.isRequired,
  inpText: PropTypes.string.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Article);
