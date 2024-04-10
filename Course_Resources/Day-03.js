
//* JavaScript Basics in Node.js:

1. //**Variables and Data Types:**
   //JavaScript variables are declared using `var`, `let`, or `const`. `var` has a function scope, while `let` and `const` have block scope. Common data types include strings, numbers, booleans, objects, arrays, and functions.

   
   let name = "John";
   const age = 30;
   let isStudent = true;
   

2. //**Functions:**
   //Functions in JavaScript are declared using the `function` keyword or arrow functions (`=>`). They can be assigned to variables and passed around as arguments to other functions.

   // Regular function
   function greet(name) {
       console.log(`Hello, ${name}!`);
   }
   
   // Arrow function
   const greet = (name) => {
       console.log(`Hello, ${name}!`);
   };
   

3. //**Control Flow:**
   //Control flow structures like `if`, `else`, `switch`, `for`, `while`, and `do-while` are used for decision making and looping.

   
   let num = 10;
   if (num > 0) {
       console.log("Positive number");
   } else {
       console.log("Non-positive number");
   }

   for (let i = 0; i < 5; i++) {
       console.log(i);
   }
   

4. //**Modules:**
   // Node.js uses the CommonJS module system to organize code into reusable modules. Modules are loaded using the `require()` function and exported using the `module.exports` or `exports` object.


   // greet.js
   function greet(name) {
       return `Hello, ${name}!`;
   }
   module.exports = greet;
   
   // main.js
   const greet = require('./greet');
   console.log(greet('John'));
   

5. //**File System Operations:**
   //Node.js provides APIs for working with the file system. Common operations include reading from and writing to files, creating directories, and deleting files.

   
   const fs = require('fs');
   
   fs.readFile('example.txt', 'utf8', (err, data) => {
       if (err) throw err;
       console.log(data);
   });
   

6. //**Asynchronous Programming:**
   //Node.js is inherently asynchronous, making heavy use of callbacks, promises, and async/await for non-blocking I/O operations.

   
   const fs = require('fs');
   
   fs.readFile('example.txt', 'utf8', (err, data) => {
       if (err) throw err;
       console.log(data);
   });
   
   console.log('Reading file...'); // Executed before readFile completes
   

7. //**Events and Event Emitters:**
   //Node.js utilizes the EventEmitter class to handle events. Custom events can be defined, emitted, and listened to using the `on()` method.

   
   const EventEmitter = require('events');
   
   class MyEmitter extends EventEmitter {}
   
   const myEmitter = new MyEmitter();
   myEmitter.on('event', () => {
       console.log('Event occurred');
   });
   
   myEmitter.emit('event');
   

/*
These are some of the fundamental concepts in JavaScript when working with Node.js. 
Understanding these concepts lays a strong foundation for building robust and scalable,
 applications using Node.js.
*/