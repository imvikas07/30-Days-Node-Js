 
/*
let's create a simple and basic API in Node.js. We'll create an API that handles CRUD (Create, Read, Update, Delete) operations,
for managing a list of users.
*/

1. //*First, make sure you have Node.js installed on your system.

2. //*Create a new directory for your project and navigate into it via the terminal:

```bash
mkdir basic-node-api
cd basic-node-api
```

3.//* Initialize a new Node.js project:

```bash
npm init -y
```

4. //*Install Express, a popular web framework for Node.js:

```bash
npm install express
```

5. //* Create a new file named `server.js` and open it in your text editor:
/*
```javascript
// server.js

const express = require('express');
const app = express();
const PORT = 3000;

// Dummy data for users
let users = [
  { id: 1, name: 'John' },
  { id: 2, name: 'Jane' },
  { id: 3, name: 'Doe' }
];

// Middleware to parse JSON requests
app.use(express.json());

// GET all users
app.get('/users', (req, res) => {
  res.json(users);
});

// GET user by ID
app.get('/users/:id', (req, res) => {
  const userId = parseInt(req.params.id);
  const user = users.find(user => user.id === userId);
  if (user) {
    res.json(user);
  } else {
    res.status(404).json({ message: 'User not found' });
  }
});

// POST a new user
app.post('/users', (req, res) => {
  const newUser = req.body;
  users.push(newUser);
  res.status(201).json(newUser);
});

// PUT (update) user by ID
app.put('/users/:id', (req, res) => {
  const userId = parseInt(req.params.id);
  const updateUser = req.body;
  users = users.map(user => (user.id === userId ? updateUser : user));
  res.json(updateUser);
});

// DELETE user by ID
app.delete('/users/:id', (req, res) => {
  const userId = parseInt(req.params.id);
  users = users.filter(user => user.id !== userId);
  res.json({ message: 'User deleted successfully' });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
```
*/

6. //* Save the file, then start the server by running:

```bash
node server.js
```

//* Now, your basic Node.js API is up and running! You can test it using tools like Postman or by sending HTTP requests directly from your browser or command line. Here are some example requests you can try:
/*
- GET all users: `http://localhost:3000/users`
- GET user by ID: `http://localhost:3000/users/1`
- POST a new user (with JSON body): `POST http://localhost:3000/users`
  ```json
  {
    "id": 4,
    "name": "Alice"
  }
  ```
- PUT (update) user by ID (with JSON body): `PUT http://localhost:3000/users/4`
  ```json
  {
    "id": 4,
    "name": "Updated Alice"
  }
  ```
- DELETE user by ID: `DELETE http://localhost:3000/users/4`

Feel free to explore and modify the code to understand how it works and customize it according to your needs!
*/
