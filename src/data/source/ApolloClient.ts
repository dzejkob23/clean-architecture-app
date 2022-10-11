import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';

const uri = 'http://130.61.143.84:4000/'
const cache = new InMemoryCache()

export const client = new ApolloClient({
    uri: uri,
    cache: cache,
});

export const GET_USER = gql`
  query GetUser($userId: ID!) {
    user(id: $userId) {
      id
      firstName
      lastName
      gender
      birthDate
    }
  }
`;