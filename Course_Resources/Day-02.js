/*
Let's create a simple Node.js program that prints "Hello, World!" to the console.
Here are the steps:
*/



/*
1. **Install Node.js**: Make sure you have Node.js installed on your system. You can download and install it from the official Node.js website: https://nodejs.org/

2. **Create a new file**: Create a new file with a `.js` extension, for example, `hello.js`.

3. **Write the code**: Open `hello.js` in a text editor and write the following code:
*/


// hello.js
console.log("Hello, World!");


4.//**Run the program**: Open your terminal or command prompt, navigate to the directory where `hello.js` is located, and run the following command:

```bash
node hello.js
```

//You should see the output:

```
Hello, World!
```

/*
That's it! You've just created and executed your first Node.js program. 
This example demonstrates a simple use case of using `console.log()` to print a message to the console.
*/

//* Interview Questions 

/*
`console.log()` and `console.warn()` are both methods provided by the `console` object in JavaScript, but they serve slightly different purposes:

1. **console.log()**:
   - This method is commonly used for general logging purposes.
   - It prints the provided message or object to the console as a standard log message.
   - It is typically used to display informational messages, debugging information, or the output of variables or expressions.
   - Messages logged using `console.log()` are usually displayed with a standard appearance in the console.

Example:
```javascript
console.log("This is a standard log message.");
```

2. **console.warn()**:
   - This method is specifically used to log warning messages to the console.
   - It prints the provided message or object to the console as a warning message.
   - Warning messages are often used to indicate potential issues or areas that require attention in the code.
   - Messages logged using `console.warn()` are usually displayed with a distinctive appearance in the console, often highlighted to draw attention.

Example:
```javascript
console.warn("Warning: This operation may cause unexpected results.");
```

In summary, `console.log()` is used for general logging purposes, while `console.warn()` is specifically used for logging warning messages. The choice between them depends on the type of message you want to convey and the level of urgency or importance associated with it.
*/