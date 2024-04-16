/*
Node.js itself is not a programming language but rather a runtime environment for executing JavaScript,
code. However, Node.js uses JavaScript, which is inherently asynchronous, to handle I/O operations efficiently.
Asynchronous programming in Node.js revolves around the event-driven, non-blocking I/O model.

*/

//* Let's dive into an example of asynchronous programming in Node.js using callbacks, promises, and async/await:

//### Example: Reading a File Asynchronously

//Suppose we want to read the contents of a file asynchronously in Node.js. We'll demonstrate three different ways to achieve this: using callbacks, promises, and async/await.

//#### Using Callbacks:

const fs = require('fs');

// Read file asynchronously with a callback
fs.readFile('example.txt', 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading file:', err);
        return;
    }
    console.log('File contents:', data);
});


//*In this example:
/*
- We use the `fs.readFile()` function to read the contents of a file named `example.txt`.
- We specify `'utf8'` as the encoding to receive the data as a UTF-8 encoded string.
- We provide a callback function that will be executed once the file is read. The callback receives two parameters: `err` for error handling and `data` for the file contents.
*/

//#### Using Promises:

const fs = require('fs').promises;

// Read file asynchronously with promises
fs.readFile('example.txt', 'utf8')
    .then(data => {
        console.log('File contents:', data);
    })
    .catch(err => {
        console.error('Error reading file:', err);
    });


//* In this example:
/*
- We use `fs.promises.readFile()` which returns a promise that resolves with the file contents.
- We chain `.then()` to handle the successful completion of the promise and `.catch()` to handle any errors.
*/
//#### Using Async/Await:


const fs = require('fs').promises;

// Define an async function to read file asynchronously
async function readFileAsync() {
    try {
        const data = await fs.readFile('example.txt', 'utf8');
        console.log('File contents:', data);
    } catch (err) {
        console.error('Error reading file:', err);
    }
}

// Call the async function
readFileAsync();

//* In this example:
/*
- We define an `async` function `readFileAsync()` that internally uses `await` to wait for the promise returned by `fs.promises.readFile()` to resolve.
- We use `try/catch` to handle any errors that may occur during the execution of the asynchronous code.

In all three examples, the file is read asynchronously, and the callback function (in the case of callbacks), or the promise resolution (in the case of promises and async/await), handles the file contents or any errors encountered during the operation.

These examples showcase different approaches to asynchronous programming in Node.js, demonstrating the evolution from traditional callback-based code to modern promise-based and async/await-based code.
*/