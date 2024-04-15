/*

To display a list of files from a folder in Node.js, you can use the `fs` (File System) module,
which is a built-in module in Node.js. Here's a step-by-step explanation of how to achieve this:

*/

1.//**Import the `fs` module**: First, you need to import the `fs` module. This module provides methods for working with the file system.

const fs = require('fs');


2.//**Specify the folder path**: Define the path to the folder from which you want to list the files.


const folderPath = '/path/to/your/folder';


//Replace `'/path/to/your/folder'` with the actual path to your folder.

3. //**Read the contents of the folder**: Use the `fs.readdir()` function to read the contents of the folder specified by `folderPath`. This function takes two arguments: the path of the directory and a callback function.


fs.readdir(folderPath, (err, files) => {
  if (err) {
    console.error('Error reading folder:', err);
    return;
  }
  
  // Process files
  console.log('Files in the folder:');
  files.forEach(file => {
    console.log(file);
  });
});


4.//**Handle errors**: Always handle errors gracefully. In case there's an error while reading the folder, log the error.

//That's it! When you run this code, it will display the list of files in the specified folder. Here's the complete code snippet:


const fs = require('fs');

const folderPath = '/path/to/your/folder';

fs.readdir(folderPath, (err, files) => {
  if (err) {
    console.error('Error reading folder:', err);
    return;
  }
  
  console.log('Files in the folder:');
  files.forEach(file => {
    console.log(file);
  });
});


//Remember to replace `'/path/to/your/folder'` with the actual path to your folder. This code will asynchronously read the contents of the folder and log the list of files to the console.