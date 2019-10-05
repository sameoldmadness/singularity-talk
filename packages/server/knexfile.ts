export default {
  development: {
    client: "sqlite3",
    connection: {
      filename: "./dev.sqlite3"
    },
    migrations: {
      extension: "ts"
    },
    seeds: {
      extension: "ts",
      directory: "./seeds/dev"
    }
  }
};
