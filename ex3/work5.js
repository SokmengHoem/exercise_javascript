const fs = require('fs');

// Read input.txt
fs.readFile('C:\\DriveD\\SabaiCode\\Javascript\\exercise\\exercise_javascript\\ex3\\input.txt', 'utf8', (err, inputContent) => {
    if (err) {
        console.error('Error reading input.txt:', err);
        return;
    }

    // Append "First modification" to output1.txt
    fs.appendFile('C:\\DriveD\\SabaiCode\\Javascript\\exercise\\exercise_javascript\\ex3\\output1.txt', 'First modification', (err) => {
        if (err) {
            console.error('Error appending to output1.txt:', err);
            return;
        }

        // Read output1.txt
        fs.readFile('C:\\DriveD\\SabaiCode\\Javascript\\exercise\\exercise_javascript\\ex3\\output1.txt', 'utf8', (err, output1Content) => {
            if (err) {
                console.error('Error reading output1.txt:', err);
                return;
            }

            // Append "Second modification" to output2.txt
            fs.appendFile('C:\\DriveD\\SabaiCode\\Javascript\\exercise\\exercise_javascript\\ex3\\output2.txt', 'Second modification', (err) => {
                if (err) {
                    console.error('Error appending to output2.txt:', err);
                    return;
                }

                // Read output2.txt and print to console
                fs.readFile('C:\\DriveD\\SabaiCode\\Javascript\\exercise\\exercise_javascript\\ex3\\output2.txt', 'utf8', (err, finalContent) => {
                    if (err) {
                        console.error('Error reading output2.txt:', err);
                        return;
                    }
                    console.log(finalContent);
                });
            });
        });
    });
});
