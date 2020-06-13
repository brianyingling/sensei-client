import { createSelector } from 'redux-bundler';

const selectSession = state => state.session;

const selectSessionId = createSelector(
  'selectSession',
  session => session.id
);

export {
  selectSession,
  selectSessionId
}