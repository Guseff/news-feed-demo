import {
  CHANGE_LOG_NAME,
  CHANGE_LOG_PASS,
  ERR_LOG_NAME,
  ERR_LOG_PASS,
  CHANGE_REG_NAME,
  CHANGE_REG_PASS,
  CHANGE_REG_EMAIL,
  ERR_REG_NAME,
  ERR_REG_PASS,
  ERR_REG_EMAIL,
} from '../constants/constants';

export function changeLogName(value) {
  return dispatch =>
    dispatch({
      type: CHANGE_LOG_NAME,
      payload: value,
    });
}

export function changeLogPass(value) {
  return dispatch =>
    dispatch({
      type: CHANGE_LOG_PASS,
      payload: value,
    });
}

export function changeRegName(value) {
  return dispatch =>
    dispatch({
      type: CHANGE_REG_NAME,
      payload: value,
    });
}

export function changeRegEmail(value) {
  return dispatch =>
    dispatch({
      type: CHANGE_REG_EMAIL,
      payload: value,
    });
}

export function changeRegPass(value) {
  return dispatch =>
    dispatch({
      type: CHANGE_REG_PASS,
      payload: value,
    });
}

export function regNewUser(a, b, c) {
  const param = 'http://localhost:3000/users/';
  const body = {
    name: a,
    email: b,
    pass: c,
  };

  if (a.length < 3) {
    return dispatch =>
    dispatch({
      type: ERR_REG_NAME,
    });
  }
  if (b.length < 3 || b.indexOf('@') < 2 || b.indexOf('.') < 1) {
    return dispatch =>
    dispatch({
      type: ERR_REG_EMAIL,
    });
  }
  if (c.length < 3) {
    return dispatch =>
    dispatch({
      type: ERR_REG_PASS,
    });
  }

  return dispatch =>
    fetch(param, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      ...(Object.keys(body).length ? { body: JSON.stringify(body) } : {}),
    })
      .then(() => dispatch(changeRegName('')))
      .then(() => dispatch(changeRegEmail('')))
      .then(() => dispatch(changeRegPass('')));
}
