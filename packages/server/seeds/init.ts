import Knex from "knex";

export async function seed(knex: Knex): Promise<any> {
  await knex("user").del();
  await knex("friends").del();

  await knex("user").insert([{ id: 1, name: "foo" }, { id: 2, name: "bar" }]);
}
