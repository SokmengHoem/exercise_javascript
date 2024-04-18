//ex1

// Mock database
// const mockDB = [
//     { id: 1, name: "sok" },
//     { id: 2, name: "sao" },
//     { id: 3, name: "pisey" }
//   ];
  
//   // Function to get user info by id
//   function getUserInfoById(id, callback) {
//     // Simulate fetching user data asynchronously
//     setTimeout(() => {
//       // Find user by id in the mock database
//       const user = mockDB.find(user => user.id === id);
//       // If user exists, pass it to the callback
//       if (user) {
//         callback(null, user);
//       } else {
//         // If user is not found, pass an error to the callback
//         callback(new Error("User not found"), null);
//       }
//     }, 2000); // Simulating delay of 2 seconds
//   }
  
//   // Function to process user data by capitalizing the name
//   function processUserData(user, callback) {
//     // Simulate processing user data asynchronously
//     setTimeout(() => {
//       // Capitalize the name
//       user.name = user.name.toUpperCase();
//       // Pass the processed user data to the callback
//       callback(null, user);
//     }, 1500); // Simulating delay of 1.5 seconds
//   }
  
//   // Main function to execute and process
//   function executeAndProcess(id) {
//     // Call getUserInfoById function to fetch user info
//     getUserInfoById(id, (err, userInfo) => {
//       if (err) {
//         // Handle error if user info retrieval fails
//         console.error(err.message);
//       } else {
//         // If user info retrieval is successful, call processUserData
//         processUserData(userInfo, (err, processedUserData) => {
//           if (err) {
//             // Handle error if user data processing fails
//             console.error(err.message);
//           } else {
//             // If user data processing is successful, log the processed data
//             console.log("Processed User Data:", processedUserData);
//           }
//         });
//       }
//     });
//   }
  
//   // Example: Execute and process user with id 2
//   executeAndProcess(2);
  

//ex2
 const fs = require('fs');

// //function readFile
// const readFile = (path) => {
//     return new Promise((resolve, rejects) => {
//         fs.readFile(path, 'utf8', (err, data) => {
//             if (err) {
//                 rejects(err);
//             }else{
//                 resolve(data);
//             }
//         })
//     });
// }

// //function writeFile
// const writeFile = (path, content) => {
//     return new Promise ((resole, rejects) => {
//             fs.writeFile(path, content,(err) => {
//                 if(err){
//                     rejects(err);
//                 }else{
//                     resole();
//                 }
//             })
//     })
// }

// readFile('c:\\DriveD\\SabaiCode\\Javascript\\exercise\\exercise_javascript\\js6\\input.txt')
// .then(content => {
//     const addContent = content+ "\nFirst modification";
//     return writeFile('c:\\DriveD\\SabaiCode\\Javascript\\exercise\\exercise_javascript\\js6\\output1.txt', addContent)
// })
// .then( () => {
//     return readFile('c:\\DriveD\\SabaiCode\\Javascript\\exercise\\exercise_javascript\\js6\\output1.txt');
// })
// .then( content => {
//     const addContent = content+ "\nSecond modification";
//     return writeFile('c:\\DriveD\\SabaiCode\\Javascript\\exercise\\exercise_javascript\\js6\\output2.txt', addContent)
// })
// .then(() => {
//     return  readFile('c:\\DriveD\\SabaiCode\\Javascript\\exercise\\exercise_javascript\\js6\\output2.txt');
// })
// .then( content => {
//     console.log(content);
// })
// .catch((err) => {
//     console.log("Error: ", err)
// })

//ex3

const readFile = (path) => {
    return new Promise ((resolve, reject) => {
        fs.readFile(path,'utf8', (err, data) => {
            if(err){
                reject(err);
            }else{
                resolve(data);
            }
        })
    })
}

const writeFile = (path, content) => {
    return new Promise ((resolve, reject) => {
      fs.writeFile(path, content, (err)=> {
        if(err){
            reject(err);
        }else{
            resolve();
        }
      })  
    })
}

let readAndWriteFile = async () => {
    try{
        let content = await readFile('c:\\DriveD\\SabaiCode\\Javascript\\exercise\\exercise_javascript\\js6\\input.txt');
        let addContent = content+ "\nFirst modification";
        await writeFile('c:\\DriveD\\SabaiCode\\Javascript\\exercise\\exercise_javascript\\js6\\output1.txt', addContent);
        content = await readFile('c:\\DriveD\\SabaiCode\\Javascript\\exercise\\exercise_javascript\\js6\\output1.txt');
        addContent = content+ "\nSecond modification";
        await writeFile('c:\\DriveD\\SabaiCode\\Javascript\\exercise\\exercise_javascript\\js6\\output2.txt', addContent);
        content = await readFile('c:\\DriveD\\SabaiCode\\Javascript\\exercise\\exercise_javascript\\js6\\output2.txt');
        console.log(content);
    }catch(err){
        console.log("Error: ", err)
    }
}

readAndWriteFile();