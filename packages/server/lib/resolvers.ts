import { IResolvers } from "graphql-tools";
import * as db from "./datasources";
import { User } from "./types";

export const resolvers: IResolvers = {
  Query: {
    users(): Promise<User[]> {
      return db.getUsers();
    }
  },
  Mutation: {
    async createUser(_, args: { name: string }): Promise<User> {
      const id = await db.createUser(args.name);

      return db.getUser(id);
    }
  }
};
