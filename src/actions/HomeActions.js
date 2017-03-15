import {
  GET_ART_LIST,
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

export function getArticlesList2() {
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
