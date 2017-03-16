import {
  PAGE_UP,
  PAGE_DOWN,
} from '../constants/constants';

const initialState = {
  offset: 0,
};

export default function pagination(state = initialState, action) {
  switch (action.type) {

    case PAGE_UP:
      return { ...state, offset: action.payload };

    case PAGE_DOWN:
      return { ...state, offset: action.payload };

    default:
      return state;
  }
}
