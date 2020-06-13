import {
  CLEAR_LOGIN,
  LOGIN_FAILURE,
  LOGIN_SUBMIT,
  LOGIN_SUBMIT_END,
  UPDATE_FIELD,
  LOGIN_SUCCESS
} from './actions';

const doClearLogin = () => ({ dispatch }) => (
  dispatch({ type: CLEAR_LOGIN })
);

const doHandleLoginFailure = (errors) => ({ dispatch }) => (
  dispatch({ type: LOGIN_FAILURE, payload: errors })
);

const doHandleLoginSuccess = () => ({ dispatch }) => (
  dispatch({ type: LOGIN_SUCCESS })
);

const doSubmit = () => ({ dispatch }) => {
  return dispatch({ type: LOGIN_SUBMIT })
};

const doSubmitEnd = () => ({ dispatch }) => (
  dispatch({ type: LOGIN_SUBMIT_END })
);

const doUpdateField = (key, value) => ({ dispatch }) => (
  dispatch({ type: UPDATE_FIELD, payload: { key, value } })
);

export {
  doClearLogin,
  doHandleLoginFailure,
  doHandleLoginSuccess,
  doSubmit,
  doSubmitEnd,
  doUpdateField
}