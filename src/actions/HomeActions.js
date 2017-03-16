import {
  GET_ART_LIST,
  PAGE_DOWN,
  PAGE_UP,
} from '../constants/constants';

export function getArticlesList() {
  const param = 'http://localhost:3000/articles/';

  return dispatch =>
    fetch(param)
      .then(resp => resp.json())
      .then((resp) => {
        dispatch({
          type: GET_ART_LIST,
          payload: resp,
        });
      });
}

export function makePageDown(num) {
  return dispatch =>
    dispatch({
      type: PAGE_DOWN,
      payload: num,
    });
}

export function makePageUp(num) {
  return dispatch =>
    dispatch({
      type: PAGE_UP,
      payload: num,
    });
}
