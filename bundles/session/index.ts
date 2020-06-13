import { createSession } from 'api/createSession';
import {
  UPDATE_SESSION_ID,
  UPDATE_SESSION
} from './actions';
import { selectSession, selectSessionId } from './selectors';
import {
  doLogin,
  doRedirectToHome,
  doUpdateSession,
  doUpdateSessionId
} from './actionCreators';

type SessionId = string

type SessionActions =
  typeof UPDATE_SESSION_ID |
  typeof UPDATE_SESSION

type SessionReducer = (state: SessionState, action: Action) => SessionState

interface Action {
  type: SessionActions,
  payload?: any
}

interface SessionState {
  id: SessionId
  createdAt: string,
  expiresAt: string,
  userId: string
}

const initialState = {
  id: null,
  createdAt: null,
  expiresAt: null,
  userId: null
}

const getExtraArgs = () => ({
  createSession
});

const reducer: SessionReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_SESSION: {
      return { ...state, ...action.payload }
    }
    case UPDATE_SESSION_ID: {
      return { ...state, id: action.payload }
    }
    default: return state;
  }
};

const bundle = {
  name: 'session',
  doLogin,
  doRedirectToHome,
  doUpdateSession,
  doUpdateSessionId,
  getExtraArgs,
  reducer,
  selectSession,
  selectSessionId,
}

export {
  bundle
}