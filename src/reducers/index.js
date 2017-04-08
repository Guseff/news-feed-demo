import { combineReducers } from 'redux';
import articles from './articles';
import comments from './comments';
import pagination from './pagination';
import form from './form';
import login from './login';
import register from './register';

export default combineReducers({
  login,
  register,
  articles,
  pagination,
  form,
  comments,
});
