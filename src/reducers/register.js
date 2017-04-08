import {
  CHANGE_REG_NAME,
  CHANGE_REG_PASS,
  CHANGE_REG_EMAIL,
  ERR_REG_NAME,
  ERR_REG_PASS,
  ERR_REG_EMAIL,
} from '../constants/constants';

const initialState = {
  regName: '',
  regPass: '',
  regEmail: '',
  regErr: {
    name: false,
    pass: false,
    email: false,
  },
};

export default function register(state = initialState, action) {
  switch (action.type) {

    case CHANGE_REG_NAME:
      return { ...state, regName: action.payload, regErr: { ...state.regErr, name: false } };

    case ERR_REG_NAME:
      return { ...state, regErr: { ...state.regErr, name: true } };

    case CHANGE_REG_PASS:
      return { ...state, regPass: action.payload, regErr: { ...state.regErr, pass: false } };

    case ERR_REG_PASS:
      return { ...state, regErr: { ...state.regErr, pass: true } };

    case CHANGE_REG_EMAIL:
      return { ...state, regEmail: action.payload, regErr: { ...state.regErr, email: false } };

    case ERR_REG_EMAIL:
      return { ...state, regErr: { ...state.regErr, email: true } };

    default:
      return state;
  }
}
