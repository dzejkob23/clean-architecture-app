import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';

export const client = new ApolloClient({
    uri: 'http://130.61.143.84:4000/',
    cache: new InMemoryCache(),
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