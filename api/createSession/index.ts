import { graphQLClientFactory } from 'utils';
import { CREATE_SESSION_MUTATION } from 'graphql/mutations';

type CreateSession = (email: string, password: string) => Object

const createSession: CreateSession = async (email: string, password: string) => {
  const client = graphQLClientFactory({
    headers: {
      Accept: 'application/json'
    },
    credentials: 'include',
  });
  const response = await client.rawRequest(CREATE_SESSION_MUTATION, {
    email,
    password
  });
  return response;
};

export {
  createSession
}
