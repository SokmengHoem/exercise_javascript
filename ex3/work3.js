const fs = require('fs');

function readFileAsync(filePath, callback) {
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      callback(err);
    } else {
      callback(null,data);
    }
  });
}

const filePath = 'C:\\DriveD\\SabaiCode\\Javascript\\exercise\\exercise_javascript\\ex3\\example.txt'; 


readFileAsync(filePath, (err, data) => {
  if (err) {
    console.error('Error reading file:', err);
  } else {
    console.log('File contents:', data);
  }
});
