import { getUsers } from "./datasources";
import { userTemplate } from "./templates";

(async () => {
  const { data } = await getUsers();
  const usersEl = document.getElementById("user-list")!;

  for (const user of data.users) {
    usersEl.insertAdjacentHTML("beforeend", userTemplate(user));
  }
})().catch(console.error);
