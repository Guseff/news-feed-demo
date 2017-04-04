import { combineReducers } from 'redux';
import articles from './articles';
import user from './user';
import pagination from './pagination';
import form from './form';

export default combineReducers({
  articles,
  user,
  pagination,
  form,
});
