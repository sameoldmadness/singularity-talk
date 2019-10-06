import { readFileSync } from "fs";
import { ApolloServer } from "apollo-server";
import { db } from "./datasources";
import { resolvers } from "./resolvers";

const schema = readFileSync(__dirname + "/schema.graphql", "utf8");

const server = new ApolloServer({
  typeDefs: schema,
  resolvers,
  context: req => ({ ...req, db })
});

server.listen({ port: 5000 }).then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
