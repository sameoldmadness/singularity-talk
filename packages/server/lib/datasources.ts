import createKnex from "knex";
import knexfile from "../knexfile";
import { User } from "./types";

const knex = createKnex(knexfile.development);

export function connectUsersAsFriends(
  userId: number,
  friendId: number
): Promise<void> {
  return knex("friends").insert([
    { user_id: userId, friend_id: friendId },
    { user_id: friendId, friend_id: userId }
  ]);
}

export function getAllUsers(): Promise<User[]> {
  return knex.select().from<User>("user");
}

export function getUser(id: number): Promise<User> {
  return knex
    .select()
    .from<User>("user")
    .where("id", id)
    .then(users => users[0]);
}

export function getUserFriends(id: number): Promise<User[]> {
  return knex
    .select("*")
    .from("user")
    .leftJoin<User>("friends", "user.id", "friends.friend_id")
    .where("friends.user_id", id);
}
