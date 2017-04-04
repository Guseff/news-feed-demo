import {
  CHANGE_AUTHOR,
  CHANGE_EMAIL,
  CHANGE_TEXT,
} from '../constants/constants';

const initialState = {
  inpAuthor: '',
  inpEmail: '',
  inpText: '',
};

export default function form(state = initialState, action) {
  switch (action.type) {

    case CHANGE_AUTHOR:
      return { ...state, inpAuthor: action.payload };

    case CHANGE_EMAIL:
      return { ...state, inpEmail: action.payload };

    case CHANGE_TEXT:
      return { ...state, inpText: action.payload };

    default:
      return state;
  }
}
