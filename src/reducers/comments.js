import {
  GET_COMMENTS,
} from '../constants/constants';

const initialState = {
  comments: [],
};

export default function comments(state = initialState, action) {
  switch (action.type) {

    case GET_COMMENTS:
      return { ...state, comments: action.payload };

    default:
      return state;
  }
}
