import createKnex from "knex";
import { User } from "../generated/types";
import knexfile from "../knexfile";

const knex = createKnex(knexfile.development);

export function getUsers(): Promise<User[]> {
  return knex.select().from<User>("user");
}

export async function getUser(id: number): Promise<User> {
  const users = await knex
    .select()
    .from<User>("user")
    .where({ id });

  return users[0];
}

export async function createUser(name: string): Promise<number> {
  const userIds = await knex("user").insert([{ name }]);

  return userIds[0];
}
