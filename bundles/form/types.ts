import {
  CLEAR_LOGIN,
  LOGIN_FAILURE,
  LOGIN_SUBMIT,
  LOGIN_SUBMIT_END,
  LOGIN_SUCCESS,
  UPDATE_FIELD
} from './actions';

interface FormState {
  email: string,
  isLoggingIn: boolean
  isLoggedIn: boolean,
  password: string,
  errors: Array<FormError>
}

type FormError = Object

type FormActions =
  typeof CLEAR_LOGIN |
  typeof LOGIN_FAILURE |
  typeof LOGIN_SUBMIT |
  typeof LOGIN_SUBMIT_END |
  typeof LOGIN_SUCCESS |
  typeof UPDATE_FIELD

interface Action {
  type: FormActions
  payload: any
}

type FormReducer = (state: FormState, action: Action) => FormState

export type {
  FormState,
  FormActions,
  Action,
  FormReducer
}