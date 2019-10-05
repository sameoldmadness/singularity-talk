import * as Knex from "knex";

export async function up(knex: Knex): Promise<any> {
  return knex.schema
    .createTable("user", function(table) {
      table.increments("id");
      table.string("name").notNullable();
    })
    .createTable("friends", function(table) {
      table.integer("user_id").unsigned();
      table.integer("friend_id").unsigned();
    });
}

export async function down(knex: Knex): Promise<any> {
  return knex.schema.dropTable("friends").dropTable("user");
}
