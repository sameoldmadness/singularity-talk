import { IResolvers } from "graphql-tools";
import * as db from "./datasources";
import { User } from "./types";

interface MakeFriendsArgs {
  userId: number;
  friendId: number;
}

export const resolvers: IResolvers = {
  Query: {
    users(): Promise<User[]> {
      return db.getAllUsers();
    }
  },
  Mutation: {
    async makeFriends(_, args: MakeFriendsArgs): Promise<User> {
      await db.connectUsersAsFriends(args.userId, args.friendId);

      return db.getUser(args.userId);
    }
  },
  User: {
    friends(parent: User): Promise<User[]> {
      return db.getUserFriends(parent.id);
    }
  }
};
