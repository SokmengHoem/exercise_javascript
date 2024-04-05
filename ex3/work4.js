const fs = require('fs');

function writeFileAsync(filePath, content, callback) {
  fs.writeFile(filePath, content, (err) => {
    if (err) {
      callback(err);
    } else {
      callback(null);
    }
  });
}

const filePath = 'C:\\DriveD\\SabaiCode\\Javascript\\exercise\\exercise_javascript\\ex3\\test.txt';
const fileContent = 'Happy khmer new year!!!';
writeFileAsync(filePath, fileContent, (err) => {
  if (err) {
    console.error('Error writing to file:', err);
  } else {
    console.log('Content has been written to file successfully.');
  }
});
