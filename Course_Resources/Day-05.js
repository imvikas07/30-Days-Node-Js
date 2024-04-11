/*

Creating a server in Node.js is relatively straightforward. 
You can use the built-in `http` or `https` modules to create a server that listens,
for incoming HTTP requests. Here's a basic example of how to create a simple HTTP server.

*/

// server.mjs
import { createServer } from 'node:http';

const server = createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello World!\n');
});

// starts a simple http server locally on port 3000
server.listen(3000, '127.0.0.1', () => {
  console.log('Listening on 127.0.0.1:3000');
});

// run with `node server.mjs`



//Here's what each part of the code does:

1. //**Import the http module**: This is a built-in module in Node.js that allows you to work with HTTP connections.

2. //**Define hostname and port**: This specifies the hostname (typically localhost) and the port number on which the server will listen for incoming requests.

3. //**Create the HTTP server**: Use the `createServer()` method of the http module to create an HTTP server. This method takes a callback function as an argument, which will be invoked each time a request is received.

4. //**Request and Response Handling**: In the callback function passed to `createServer()`, you handle incoming HTTP requests and construct the appropriate HTTP response. In this example, we set the status code to 200 (OK), set the content type to plain text, and send back the response body 'Hello, World!\n'.

5. //**Start the server**: Finally, call the `listen()` method on the server object to start listening for incoming connections. The `listen()` method takes the port number, hostname, and an optional callback function that will be called once the server is up and running.

// When you run this script, it will start a server listening on `http://localhost:3000`. You can then open a web browser and navigate to that URL to see the "Hello, World!" message.