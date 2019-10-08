import { ApolloServer } from "apollo-server";
import { schema } from "./schema";
import { resolvers } from "./resolvers";

const server = new ApolloServer({
  typeDefs: schema,
  resolvers
});

server.listen({ port: 5000 }).then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
