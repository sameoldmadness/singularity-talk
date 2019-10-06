import ApolloClient from "apollo-boost";
import { GetUsersQuery } from "../generated/types";
import { GET_USERS } from "./queries";

const client = new ApolloClient({ uri: "http://localhost:5000" });

export function getUsers() {
  return client.query<GetUsersQuery>({ query: GET_USERS });
}
