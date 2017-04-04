import {
  GET_ART_LIST,
  GET_ART,
  ART_PER_PAGE,
  PAGE_DOWN,
  PAGE_UP,
  SHOW_ARTICLE,
  NEW_COMM,
  CHANGE_AUTHOR,
  CHANGE_EMAIL,
  CHANGE_TEXT,
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

export function leaveNewComment(a, b, c, d) {
  const param = 'http://localhost:3000/comments/';
  const body = {
    author: a,
    email: b,
    text: c,
    articleTitle: d,
  };

  return dispatch =>
    fetch(param, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      ...(Object.keys(body).length ? { body: JSON.stringify(body) } : {}),
    })
      .then(resp => resp.json())
      .then((resp) => {
        dispatch({
          type: NEW_COMM,
          payload: resp,
        });
      });
}

export function changeAuthor(value) {
  return dispatch =>
    dispatch({
      type: CHANGE_AUTHOR,
      payload: value,
    });
}

export function changeEmail(value) {
  return dispatch =>
    dispatch({
      type: CHANGE_EMAIL,
      payload: value,
    });
}

export function changeText(value) {
  return dispatch =>
    dispatch({
      type: CHANGE_TEXT,
      payload: value,
    });
}
