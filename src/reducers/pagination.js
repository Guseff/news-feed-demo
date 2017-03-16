import {
  PAGE_UP,
  PAGE_DOWN,
  ART_PER_PAGE,
} from '../constants/constants';

const initialState = {
  offset: 0,
};

export default function pagination(state = initialState, action) {
  switch (action.type) {

    case PAGE_UP:
      return { ...state, offset: action.payload + ART_PER_PAGE };

    case PAGE_DOWN:
      return { ...state, offset: action.payload - ART_PER_PAGE };

    default:
      return state;
  }
}
