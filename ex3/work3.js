const fs = require('fs');

// function readFileAsync(filePath, callback) {
//    callback(filePath);
// }

// const filePath = 'C:\\DriveD\\SabaiCode\\Javascript\\exercise\\exercise_javascript\\ex3\\example.txt';

// const read = (filePath) => {
//   fs.readFile(filePath,'utf8', (err, data) => {
//     if (err) {
//       throw new Error('Error reading file:', err);
//     } else {
//       console.log('File contents:', data);
//     }
//   });
// };

// readFileAsync(filePath, read);



// function ReadFile(filePath, callback){
//   const result = fs.readFile(filePath, 'utf8',(err, data) => {
//     if (err) {
//        throw new Error(err);
//     } 
//     callback(data);
//   })
// }

// function X2 (data){
//   return console.log(data + "  Hi");
// }

// ReadFile('C:\\DriveD\\SabaiCode\\Javascript\\exercise\\exercise_javascript\\ex3\\example.txt', X2)

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(array.find(3));