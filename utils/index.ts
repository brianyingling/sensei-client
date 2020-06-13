import { GraphQLClient } from 'graphql-request';
import { GRAPHQL_URL } from '../consts';

const graphQLClientFactory = (options = {}) => {
  return new GraphQLClient(GRAPHQL_URL, options);
}

export {
  graphQLClientFactory
};