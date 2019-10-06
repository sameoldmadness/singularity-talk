import Photon, { User } from "@generated/photon";

const photon = new Photon();

export async function createUser(name: string): Promise<User> {
  return photon.users.create({ data: { name } });
}
