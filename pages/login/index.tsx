import React from 'react';
import { useAsyncEffect } from 'use-async-effect';
import { useMutation } from 'react-query';
import { graphQLClientFactory } from 'utils';
import { CREATE_SESSION_MUTATION } from 'graphql/mutations';
import LoginView from 'components/login';
import { createSession } from 'api/createSession';

const Login = () => {
  // const [mutate, { data, status, error }] = useMutation(createSession);

  useAsyncEffect(async () => {
    // await mutate();
  }, []);

  return <LoginView />;
};

export default Login;
