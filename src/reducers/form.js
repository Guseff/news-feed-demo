import {
  CHANGE_NAME,
  CHANGE_EMAIL,
  CHANGE_TEXT,
  ERR_NAME,
  ERR_EMAIL,
  ERR_TEXT,
} from '../constants/constants';

const initialState = {
  inpAuthor: '',
  inpEmail: '',
  inpText: '',
  err: {
    name: false,
    email: false,
    text: false,
  },
};

export default function form(state = initialState, action) {
  switch (action.type) {

    case CHANGE_NAME:
      return { ...state, inpAuthor: action.payload, err: { ...state.err, name: false } };

    case ERR_NAME:
      return { ...state, err: { ...state.err, name: true } };

    case CHANGE_EMAIL:
      return { ...state, inpEmail: action.payload, err: { ...state.err, email: false } };

    case ERR_EMAIL:
      return { ...state, err: { ...state.err, email: true } };

    case CHANGE_TEXT:
      return { ...state, inpText: action.payload, err: { ...state.err, text: false } };

    case ERR_TEXT:
      return { ...state, err: { ...state.err, text: true } };

    default:
      return state;
  }
}
