# singularity-talk

## Getting Started

```
npx lerna bootstrap
npx lerna run start
```

## Architecture

```
+------------------------------------------------------------+
|                                                     SERVER |
|                                                            |
|                                                            |
|       +--------+        +--------------------------+       |
|       |        |        |                          |       |
|       |        |  knex  |                          |       |
|       | SQlite +<-------+       Apollo Server      |       |
|       |        |        |                          |       |
|       |        |        |                          |       |
|       +--------+        +-------------+------------+       |
|                                       ^                    |
+------------------------------------------------------------+
                                        |
                                        |
                                        | Apollo Client
                                        |
+------------------------------------------------------------+
|                                       |             CLIENT |
|                                       |                    |
|                                       |                    |
|                         +-------------+------------+       |
|                         |                          |       |
|                         |                          |       |
|                         |      Web Application     |       |
|                         |                          |       |
|                         |                          |       |
|                         +--------------------------+       |
|                                                            |
+------------------------------------------------------------+

```

Server provides a GraphQL API for clients. Data is stored in an SQLite database.

Client (Web Application) requests data from server via Apollo client.

Pros:

- partial type safety by Typescript
- easy to set up

Cons:

- SQL schema, GraphQL schema, SQL queries and return types, GraphQL queries and return types must be manually kept in sync
