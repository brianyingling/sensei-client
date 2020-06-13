import React from 'react';
import { connect } from 'redux-bundler-react';
import Nav from './nav';

const render = ({ sessionId }) => (
  <Nav
    sessionId={sessionId}
  />
)

export default connect(
  'selectSessionId',
  render
);