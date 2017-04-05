import {
  GET_ART_LIST,
  SHOW_ARTICLE,
} from '../constants/constants';

const initialState = {
  articles: [],
  article: {},
};

export default function articles(state = initialState, action) {
  switch (action.type) {

    case GET_ART_LIST:
      return { ...state, articles: action.payload };

    case SHOW_ARTICLE:
      return { ...state, article: action.payload };

    default:
      return state;
  }
}
