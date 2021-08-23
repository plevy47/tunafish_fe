export const server = {
  port: '2222',
  url: 'http://localhost',
};
const endpoint = `${server.url}:${server.port}`;

export const addUser = (
  username: string,
  password: string,
  email: string,
) => (`${endpoint}/create-user?username=${username}&password=${password}6&email=${email}`);

// const endpoints = {
//  createUser: `${endpoint}/create-user?username=${username}&password=${password}6&email=${email}`,
//   create: `${endpoint}/create`,
// };
// ?taskName=ConnectServer&table=Tasks
