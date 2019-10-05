import ApolloClient, { gql } from "apollo-boost";

const client = new ApolloClient({ uri: "http://localhost:5000" });

const GET_USERS = gql`
  query {
    users {
      id
      name
    }
  }
`;

interface User {
  id: number;
  name: string;
}

client.query<{ users: User[] }>({ query: GET_USERS }).then(res => {
  const { users } = res.data;
  const usersHtml = `
    <h1>Users</h1>
    <ul>
      ${users.map(user => `<li>${user.name}</li>`)}
    </ul>
  `;

  document.body.insertAdjacentHTML("afterend", usersHtml);
});
