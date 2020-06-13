import Router from 'next/router';
import {
  REDIRECT_TO_HOME,
  UPDATE_SESSION,
  UPDATE_SESSION_ID
} from './actions';
import {
  doClearLogin,
  doHandleLoginFailure,
  doHandleLoginSuccess,
  doSubmitEnd
} from '../form/actionCreators';

const doLogin = () => async ({ dispatch, store, createSession }) => {
  const name = store.selectEmail();
  const password = store.selectPassword();
  try {
    const response = await createSession(name, password);
    const session = response.data.createSession;
    dispatch(doHandleLoginSuccess());
    dispatch(doUpdateSession(session))
    dispatch(doClearLogin());
    dispatch(doSubmitEnd());
    dispatch(doRedirectToHome());
  } catch (error) {
    const { response: { errors } } = JSON.parse(JSON.stringify(error));
    dispatch(doHandleLoginFailure(errors));
    dispatch(doSubmitEnd());
  }
  // const { data, error } = await createSession(name, password);

  // debugger;
  // const { errors, data } = await createSession(name, password);
  // debugger;
  // dispatch(doSubmitEnd());
  // console.log('errors:', errors);
  // console.log('data:', data);
  // if (errors) {
  //   // handle errors
  //   // dispatch()
  // }

  // if (data.createSession) {
  //   const { createSession: session } = data;
  //   dispatch(doUpdateSession(session))
  // }

}

const doRedirectToHome = () => ({ dispatch }) => {
  dispatch({ type: REDIRECT_TO_HOME })
  Router.push('/');
}

const doUpdateSession = session => ({ dispatch }) => (
  dispatch({ type: UPDATE_SESSION, payload: session })
);

const doUpdateSessionId = (id: string) => ({ dispatch }) => (
  dispatch({ type: UPDATE_SESSION_ID, payload: id })
);

export {
  doHandleLoginFailure,
  doLogin,
  doRedirectToHome,
  doUpdateSession,
  doUpdateSessionId
}