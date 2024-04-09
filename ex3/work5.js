const fs = require('fs');

// Promisifying fs.readFile
const readFile = (path) => {
    return new Promise((resolve, reject) => {
        fs.readFile(path, 'utf8', (err, data) => {
            if (err) reject(err);
            else resolve(data);
        });
    });
};

// Promisifying fs.writeFile
const writeFile = (path, data) => {
    return new Promise((resolve, reject) => {
        fs.writeFile(path, data, 'utf8', (err) => {
            if (err) reject(err);
            else resolve();
        });
    });
};

// Read input.txt
readFile('c:\\DriveD\\SabaiCode\\Javascript\\exercise\\exercise_javascript\\ex3\\input.txt')
    .then(content => {
        // Append "First modification"
        const modifiedContent = content + "\nFirst modification";
        // Write to output1.txt
        return writeFile('c:\\DriveD\\SabaiCode\\Javascript\\exercise\\exercise_javascript\\ex3\\output1.txt', modifiedContent);
    })
    .then(() => {
        // Read output1.txt
        return readFile('c:\\DriveD\\SabaiCode\\Javascript\\exercise\\exercise_javascript\\ex3\\output1.txt');
    })
    .then(content => {
        // Append "Second modification"
        const modifiedContent = content + "\nSecond modification";
        // Write to output2.txt
        return writeFile('c:\\DriveD\\SabaiCode\\Javascript\\exercise\\exercise_javascript\\ex3\\output2.txt', modifiedContent);
    })
    .then(() => {
        // Read output2.txt and print to console
        return readFile('c:\\DriveD\\SabaiCode\\Javascript\\exercise\\exercise_javascript\\ex3\\output2.txt');
    })
    .then(content => {
        console.log(content);
    })
    .catch(err => {
        console.error("Error:", err);
    });

    // 

 //   const fs = require('fs').promises;

// async function modifyFiles() {
//     try {
//         // Read input.txt
//         let content = await fs.readFile('input.txt', 'utf8');
        
//         // Append "First modification"
//         content += "\nFirst modification";
        
//         // Write to output1.txt
//         await fs.writeFile('output1.txt', content);
        
//         // Read output1.txt
//         content = await fs.readFile('output1.txt', 'utf8');
        
//         // Append "Second modification"
//         content += "\nSecond modification";
        
//         // Write to output2.txt
//         await fs.writeFile('output2.txt', content);
        
//         // Read output2.txt
//         content = await fs.readFile('output2.txt', 'utf8');
        
//         // Print content
//         console.log(content);
//     } catch (err) {
//         console.error("Error:", err);
//     }
// }

// modifyFiles();
