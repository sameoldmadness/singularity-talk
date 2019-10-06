import { nexusPrismaPlugin } from "@generated/nexus-prisma";
import * as path from "path";
import { objectType, makeSchema, stringArg } from "nexus";
import * as db from "./datasources";

const Query = objectType({
  name: "Query",
  definition(t) {
    // t.field("foo", { type: "Boolean" });
    t.crud.users();
  }
});
const Mutation = objectType({
  name: "Mutation",
  definition(t) {
    t.field("createUser", {
      type: "User",
      args: {
        name: stringArg({ required: true })
      },
      resolve(_parent, args) {
        return db.createUser(args.name);
      }
    });
  }
});

const User = objectType({
  name: "User",
  definition(t) {
    // t.field("foo", { type: "Boolean" });
    t.model.id();
    t.model.name();
  }
});

const nexusPrisma = nexusPrismaPlugin({
  photon: ctx => ctx.photon
});

export const schema = makeSchema({
  types: [nexusPrisma, Query, Mutation, User],
  outputs: {
    schema: path.join(__dirname, "../generated/schema.graphql"),
    typegen: path.join(__dirname, "../generated/nexus.ts")
  },
  typegenAutoConfig: {
    sources: [
      {
        source: "@generated/photon",
        alias: "photon"
      },
      {
        source: path.join(__dirname, "./types.ts"),
        alias: "ctx"
      }
    ],
    contextType: "ctx.Context"
  }
});
