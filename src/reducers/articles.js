import {
  GET_ART_LIST,
} from '../constants/constants';

const initialState = {
  articles: [],
};

export default function articles(state = initialState, action) {
  switch (action.type) {

    case GET_ART_LIST:
      return { ...state, articles: action.payload };

    default:
      return state;
  }
}
