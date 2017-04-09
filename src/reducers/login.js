import {
  CHANGE_LOG_NAME,
  CHANGE_LOG_PASS,
  ERR_LOG_NAME,
  ERR_LOG_PASS,
  LOGIN_USER,
  LOGOUT,
} from '../constants/constants';

const initialState = {
  logName: '',
  logPass: '',
  logErr: {
    name: false,
    pass: false,
  },
  loggedUser: '',
};

export default function login(state = initialState, action) {
  switch (action.type) {

    case CHANGE_LOG_NAME:
      return { ...state, logName: action.payload, logErr: { ...state.logErr, name: false } };

    case ERR_LOG_NAME:
      return { ...state, logErr: { ...state.logErr, name: true } };

    case CHANGE_LOG_PASS:
      return { ...state, logPass: action.payload, logErr: { ...state.logErr, pass: false } };

    case ERR_LOG_PASS:
      return { ...state, logErr: { ...state.logErr, pass: true } };

    case LOGIN_USER:
      return { ...state, loggedUser: action.payload };

    case LOGOUT:
      return { ...state, loggedUser: '' };


    default:
      return state;
  }
}
