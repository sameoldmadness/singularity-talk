import ApolloClient from "apollo-boost";
import { GET_USERS } from "./queries";
import { User } from "./types";

const client = new ApolloClient({ uri: "http://localhost:5000" });

export function getUsers() {
  return client.query<{ users: User[] }>({ query: GET_USERS });
}
