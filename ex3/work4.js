const fs = require('fs');

function writeFileAsync(filePath, content, callback) {
  callback(filePath,content)
}

const filePath = 'C:\\DriveD\\SabaiCode\\Javascript\\exercise\\exercise_javascript\\ex3\\test.txt';
const fileContent = 'Happy khmer new year!!!';
const write = (filePath,fileContent ) => {
  fs.writeFile(filePath, fileContent, (err) => {
    if (err) {
      console.error('Error writing to file:', err);
    } else {
      console.log('Content has been written to file successfully.');
    }
  });
};

writeFileAsync(filePath, fileContent,write)
