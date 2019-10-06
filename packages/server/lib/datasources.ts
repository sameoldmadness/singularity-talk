import { Prisma, User } from "../generated/prisma-binding";

export const db = new Prisma({ endpoint: "http://localhost:4466" });

export async function createUser(name: string): Promise<User> {
  const user = await db.mutation.createUser({ data: { name } });

  return user;
}
