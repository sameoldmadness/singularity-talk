import { gql } from "apollo-server";

export const schema = gql`
  type User {
    id: Int!
    name: String!
  }

  type Query {
    users: [User!]!
  }

  type Mutation {
    createUser(name: String!): User!
  }
`;
