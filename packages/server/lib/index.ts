import { ApolloServer, gql } from "apollo-server";
import createKnex from "knex";
import knexfile from "../knexfile";

const knex = createKnex(knexfile.development);

const server = new ApolloServer({
  typeDefs: gql`
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
  `,
  resolvers: {
    Query: {
      users: () => knex.select().from("user")
    },
    Mutation: {
      makeFriends: async (_parent, args) => {
        const user = (await knex
          .select("*")
          .from("user")
          .where("id", args.userId))[0];
        const friend = (await knex
          .select("*")
          .from("user")
          .where("id", args.friendId))[0];

        await knex("friends").insert([
          { user_id: user.id, friend_id: friend.id },
          { user_id: friend.id, friend_id: user.id }
        ]);

        return [user, friend];
      }
    },
    User: {
      friends: async parent => {
        return knex
          .select("*")
          .from("user")
          .leftJoin("friends", "user.id", "friends.friend_id")
          .where("friends.user_id", parent.id);
      }
    }
  }
});

server.listen({ port: 5000 }).then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
