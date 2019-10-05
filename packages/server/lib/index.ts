import { ApolloServer, gql } from "apollo-server";

const typeDefs = gql`
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

const users = {
  1: {
    id: 1,
    name: 'foo',
    friends: []
  },
  2: {
    id: 2,
    name: 'bar',
    friends: []
  }
};

const resolvers = {
  Query: {
    users: () => Object.values(users)
  },
  Mutation: {
    makeFriends: (_parent, args) => {
      const user = users[args.userId];
      const friend = users[args.friendId];

      user.friends.push(friend);
      friend.friends.push(user);

      return [user, friend];
    }
  }
};

const server = new ApolloServer({ typeDefs, resolvers });

server.listen({ port: 5000 }).then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
