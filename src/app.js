
// This is a simple Node.js application that
// does a network request and prints the response.
export async function app() {
  const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
  const user = await response.json()
  return user;
}
