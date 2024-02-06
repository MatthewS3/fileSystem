// Import the fs module to work with the file system
const fs = require('fs');

// The name of the file to write to
const fileName = 'data.txt';

// The content to write to the file
const content1 = 'This is the first content.\n';
const content2 = 'This is the second content.\n';

// Write content to the file
fs.writeFile(fileName, content1, (err) => {
  if (err) {
    console.error(`An error occurred while writing to the file: ${err}`);
    return;
  }

  // Append additional content to the file
  fs.appendFile(fileName, content2, (err) => {
    if (err) {
      console.error(`An error occurred while appending to the file: ${err}`);
      return;
    }

    // Read the contents of the file to see if the second content overwrote the first one
    fs.readFile(fileName, 'utf8', (err, data) => {
      if (err) {
        console.error(`An error occurred while reading the file: ${err}`);
        return;
      }

      console.log('The contents of the file are:');
      console.log(data);

      // Check if the contents were written on separate lines
      const lines = data.split('\n');
      if (lines.length === 3) {
        console.log('The second content was placed on the next line.');
      } else {
        console.log('The second content overwrote the first one.');
      }
    });
  });
});