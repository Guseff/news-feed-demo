import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { getArticle, leaveNewComment, changeAuthor, changeEmail, changeText } from '../actions/HomeActions';
import Form from '../components/Form';
import CommentList from '../components/CommentList';

class Article extends Component {
  componentDidMount() {
    this.props.getArticle(this.props.params.id);
  }

  render() {
    const { article, comments } = this.props;
    const { inpAuthor, inpEmail, inpText } = this.props;

    return (<div className="Article">
      <div className="wrap">
        <img alt="" src={article.LimgURL} className="l-article-img" />
        <h3>{article.title}</h3>
        <p><b><i>{article.author}</i></b></p>
        <p>{article.description}</p>
      </div>
      <div className="clear" />
      <div className="what-about">
        What our Visitors think about it:
      </div>
      <CommentList comments={comments} />
      <Form
        leaveNewComment={this.props.leaveNewComment}
        changeAuthor={this.props.changeAuthor}
        changeEmail={this.props.changeEmail}
        changeText={this.props.changeText}
        inpAuthor={inpAuthor} inpEmail={inpEmail} inpText={inpText}
        parentID={article._id}
      />
    </div>);
  }
}

function mapStateToProps(state) {
  return {
    article: state.articles.article,
    comments: state.comments.comments,
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
    getArticle: bindActionCreators(getArticle, dispatch),
  };
}

Article.propTypes = {
  article: PropTypes.object.isRequired,
  comments: PropTypes.array.isRequired,
  params: PropTypes.any.isRequired,
  leaveNewComment: PropTypes.func.isRequired,
  changeAuthor: PropTypes.func.isRequired,
  inpAuthor: PropTypes.string.isRequired,
  changeEmail: PropTypes.func.isRequired,
  inpEmail: PropTypes.string.isRequired,
  changeText: PropTypes.func.isRequired,
  inpText: PropTypes.string.isRequired,
  getArticle: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Article);
