import {
  LOGIN_FAILURE,
  LOGIN_SUBMIT,
  LOGIN_SUBMIT_END,
  LOGIN_SUCCESS,
  UPDATE_FIELD,
  CLEAR_LOGIN
} from './actions';
import { FormState, FormReducer } from './types';

const initialState = {
  email: '',
  password: '',
  isLoggingIn: false,
  isLoggedIn: false,
  errors: []
}

const reducer: FormReducer = (state = initialState, action): FormState => {
  const { type, payload } = action;
  switch (type) {
    case CLEAR_LOGIN: {
      return { ...initialState }
    }
    case LOGIN_FAILURE: {
      return { ...state, isLoggingIn: false, errors: action.payload }
    }
    case LOGIN_SUBMIT: {
      return { ...state, isLoggingIn: true }
    }
    case LOGIN_SUCCESS: {
      return { ...state, isLoggedIn: true }
    }
    case LOGIN_SUBMIT_END: {
      return { ...state, isLoggingIn: false }
    }
    case UPDATE_FIELD: {
      const { key, value } = payload;
      return { ...state, [key]: value }
    }
    default: {
      return state;
    }
  }
}

export {
  reducer
}