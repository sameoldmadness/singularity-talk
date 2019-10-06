import { User } from "../generated/types";

export function userTemplate(user: User) {
  return `
      <li class="media my-4">
        <img src="https://picsum.photos/50/50" class="mr-3" alt="..." />
        <div class="media-body">
          <h5 class="mt-0 mb-1">${user.name}</h5>
        </div>
      </li>
    `;
}
