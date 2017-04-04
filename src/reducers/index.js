import { combineReducers } from 'redux';
import articles from './articles';
import comments from './comments';
import user from './user';
import pagination from './pagination';
import form from './form';

export default combineReducers({
  articles,
  user,
  pagination,
  form,
  comments,
});
