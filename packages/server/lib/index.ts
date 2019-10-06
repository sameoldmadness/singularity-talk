import Photon from "@generated/photon";
import { ApolloServer } from "apollo-server";
import { schema } from "./resolvers";

const photon = new Photon();

const server = new ApolloServer({
  schema,
  context: { photon }
});

server.listen({ port: 5000 }).then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
