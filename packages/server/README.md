# `server`

GraphQL API for Singularity talk.

## Getting Started

Install Prisma. ([docs](https://www.prisma.io/docs/get-started/01-setting-up-prisma-new-database-TYPESCRIPT-t002/#install-the-prisma-cli))

```
brew tap prisma/prisma
brew install prisma
```

Install Docker. ([docs](https://www.prisma.io/docs/get-started/01-setting-up-prisma-new-database-TYPESCRIPT-t002/#install-docker))

> To use Prisma locally, you need to have [Docker](https://www.docker.com/) installed on your machine. If you don't have Docker yet, you can download the Docker Community Edition for your operating system [here](https://www.docker.com/community-edition).

```
npm install
npm run setup-database
```

The previous command will run in `watch` mode, which means it will wait until you terminate it.

So the next command need to be run in a new terminal window.

```
npm run start
```

## Usage

Open `http://localhost:5000` and expore GraphQL API.
