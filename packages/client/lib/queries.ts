import { gql } from "apollo-boost";

export const GET_USERS = gql`
  query {
    users {
      id
      name
    }
  }
`;
