
/*
In Node.js, core modules are built-in modules that provide essential functionality for various tasks such as file system operations, network communication, event handling, and more. These modules are available by default when you install Node.js and do not require any additional installation.
Here is a list of some core modules in Node.js along with a brief demonstration of how to use each one
*/


// Importing the 'fs' module for file system operations
const fs = require('fs');

// Reading a file named 'example.txt'
fs.readFile('example.txt', 'utf8', (err, data) => {
    // If an error occurs while reading the file, log the error
    if (err) {
        console.error(err);
        return;
    }
    // If successful, log the content of the file
    console.log(data);
});

// Writing to a file named 'newFile.txt'
fs.writeFile('newFile.txt', 'Hello, World!', (err) => {
    // If an error occurs while writing to the file, log the error
    if (err) {
        console.error(err);
        return;
    }
    // If successful, log a message
    console.log('File created successfully');
});


// Importing the 'http' module for creating HTTP servers and making HTTP requests
const http = require('http');

// Creating a simple HTTP server
const server = http.createServer((req, res) => {
    // Setting the response header
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    // Sending a response to the client
    res.end('Hello, World!');
});

// Making the server listen on port 3000
server.listen(3000, () => {
    console.log('Server is running on port 3000');
});



// Importing the 'events' module for event-driven architecture
const EventEmitter = require('events');

// Creating an instance of EventEmitter
const myEmitter = new EventEmitter();

// Listening for an event named 'myEvent'
myEmitter.on('myEvent', () => {
    // When 'myEvent' is emitted, log a message
    console.log('Event occurred');
});

// Emitting an event named 'myEvent'
myEmitter.emit('myEvent');

// Importing the 'path' module for working with file and directory paths
const path = require('path');

// Defining a file path
const filePath = '/path/to/somefile.txt';

// Getting the base name of the file path
console.log(path.basename(filePath)); // Output: somefile.txt

// Getting the directory name of the file path
console.log(path.dirname(filePath));  // Output: /path/to

// Importing the 'util' module for utility functions
const util = require('util');

// Defining a name
const name = 'John';

// Formatting a string using util.format
const formatted = util.format('Hello, %s', name);

// Logging the formatted string
console.log(formatted); // Output: Hello, John

/*
These comments provide explanations for each part of the code, describing what each section does and how it,
 contributes to the overall functionality of the program.
 */