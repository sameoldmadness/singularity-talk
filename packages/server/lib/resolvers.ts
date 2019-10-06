import { forwardTo } from "prisma-binding";
import { Resolvers } from "../generated/types";
import * as db from "./datasources";

export const resolvers: Resolvers = {
  Query: {
    users: forwardTo("db")
  },
  Mutation: {
    createUser(_, args) {
      return db.createUser(args.name);
    }
  }
};
