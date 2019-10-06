import { Resolvers } from "../generated/types";
import * as db from "./datasources";

export const resolvers: Resolvers = {
  Query: {
    users() {
      return db.getUsers();
    }
  },
  Mutation: {
    async createUser(_, args) {
      const id = await db.createUser(args.name);

      return db.getUser(id);
    }
  }
};
