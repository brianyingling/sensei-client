import Router from 'next/router'
import { createSelector } from 'redux-bundler';
import { FormState } from './types';

const selectForm = state => state.form

const selectIsLoggingIn = createSelector(
  'selectForm',
  (form: FormState) => form.isLoggingIn
);

const selectIsLoggedIn = createSelector(
  'selectForm',
  (form: FormState) => form.isLoggedIn
)

const selectEmail = createSelector(
  'selectForm',
  (form: FormState) => form.email
);

const selectLoginErrors = createSelector(
  'selectForm',
  (form: FormState) => form.errors
)

const selectPassword = createSelector(
  'selectForm',
  (form: FormState) => form.password
);

const reactIsLoggingIn = createSelector(
  'selectIsLoggingIn',
  (isLoggingIn: boolean) => {
    if (isLoggingIn) {
      return { actionCreator: 'doLogin' }
    }
  }
);

export {
  reactIsLoggingIn,
  selectEmail,
  selectForm,
  selectIsLoggingIn,
  selectIsLoggedIn,
  selectLoginErrors,
  selectPassword,
}