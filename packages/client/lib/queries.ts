import { gql } from "apollo-boost";

export const GET_USERS = gql`
  query getUsers {
    users {
      id
      name
    }
  }
`;
