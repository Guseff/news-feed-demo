import {
  GET_ART_LIST,
  GET_ART,
  ART_PER_PAGE,
  PAGE_DOWN,
  PAGE_UP,
  SHOW_ARTICLE,
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

export function getArticle(url) {
  const param = url;

  return dispatch =>
    fetch(param)
      .then(resp => resp.json())
      .then((resp) => {
        dispatch({
          type: GET_ART,
          payload: resp,
        });
      });
}


export function makePageDown(num, maxNum) {
  return (dispatch) => {
    const a = num - ART_PER_PAGE >= 0 ? num - ART_PER_PAGE : 0;
    dispatch({
      type: PAGE_DOWN,
      payload: a,
    });
  };
}

export function makePageUp(num, maxNum) {
  return (dispatch) => {
    const a = (num + ART_PER_PAGE <= maxNum) ? num + ART_PER_PAGE : num;
    dispatch({
      type: PAGE_UP,
      payload: a,
    });
  };
}

export function showArticle(num) {
  return dispatch =>
    dispatch({
      type: SHOW_ARTICLE,
      payload: num,
    });
}
