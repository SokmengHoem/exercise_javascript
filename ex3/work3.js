const fs = require('fs');

function readFileAsync(filePath, callback) {
   callback(filePath);
}

const filePath = 'C:\\DriveD\\SabaiCode\\Javascript\\exercise\\exercise_javascript\\ex3\\example.txt';

const read = (filePath) => {
  fs.readFile(filePath,'utf8', (err, data) => {
    if (err) {
      throw new Error('Error reading file:', err);
    } else {
      console.log('File contents:', data);
    }
  });
};

readFileAsync(filePath, read);