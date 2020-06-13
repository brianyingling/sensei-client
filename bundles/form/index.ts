import {
  doClearLogin,
  doHandleLoginFailure,
  doHandleLoginSuccess,
  doSubmit,
  doSubmitEnd,
  doUpdateField
} from './actionCreators';
import {
  reactIsLoggingIn,
  selectForm,
  selectIsLoggingIn,
  selectIsLoggedIn,
  selectEmail,
  selectLoginErrors,
  selectPassword,
} from './selectors'
import { reducer } from './reducer';

const bundle = {
  name: 'form',
  doClearLogin,
  doHandleLoginFailure,
  doHandleLoginSuccess,
  doSubmit,
  doSubmitEnd,
  doUpdateField,
  reactIsLoggingIn,
  reducer,
  selectForm,
  selectEmail,
  selectLoginErrors,
  selectPassword,
  selectIsLoggingIn,
  selectIsLoggedIn
}

export {
  bundle
}