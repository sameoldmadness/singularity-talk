import { gql } from "apollo-server";

export const schema = gql`
  type User {
    id: Int!
    name: String!
    friends: [User!]!
  }

  type Query {
    users: [User!]!
  }

  type Mutation {
    makeFriends(userId: Int!, friendId: Int!): [User!]!
  }
`;
