import Knex from "knex";

export async function up(knex: Knex): Promise<any> {
  return knex.schema.createTable("user", function(table) {
    table.increments("id");
    table.string("name").notNullable();
  });
}

export async function down(knex: Knex): Promise<any> {
  return knex.schema.dropTable("user");
}
