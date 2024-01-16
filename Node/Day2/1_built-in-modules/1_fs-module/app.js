const fs = require('fs');

// Sync Code - Blocking
// try {
//     var data = fs.readFileSync('./file1.txt', 'utf-8');
//     console.log(data);
// } catch (err) {
//     console.log(err);
// }

// Async Code - Non Blocking
// fs.readFile('./file1.txt', 'utf-8', (err, data) => {
//     if (err)
//         console.log(err);
//     else
//         console.log(data);
// });

// ------------------------------------------------ Write
// var message = "Hello from Node Application\n";

// fs.writeFile('./file2.txt', message, 'utf-8', (err)=>{
//     if(err)
//         console.log(err);
//     else
//         console.log("File Written Successfully");
// });


// ------------------------------------------------ Append
var message = "Hello from Node Application\n";

fs.appendFile('./file3.txt', message, 'utf-8', (err)=>{
    if(err)
        console.log(err);
    else
        console.log("File Appended Successfully");
});


console.log("Completed and Waiting....");