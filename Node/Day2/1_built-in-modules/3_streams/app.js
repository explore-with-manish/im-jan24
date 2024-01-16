// const fs = require('fs');

// // Read the entire file into memory and then callback will be executed
// // fs.readFile('file1.txt', 'utf-8', (err, data) => {
// //     if (err)
// //         console.error(err);
// //     else
// //         console.log(data);
// // });

// const readStream = fs.createReadStream('./file1.txt', 'utf-8');

// readStream.on('open', () => {
//     console.log('File Opened...');
// });

// readStream.on('error', (err) => {
//     console.log(err);
// });

// readStream.on('data', (chunk) => {
//     console.log(chunk);
// });

// readStream.on('end', () => {
//     console.log('File Ended...');
//     readStream.close();
// });

// ----------------------------------------

const fs = require('fs');

const readStream = fs.createReadStream('./file1.txt', 'utf-8');
const writeStream = fs.createWriteStream('./file2.txt', 'utf-8');

readStream.on('data', (chunk) => {
    writeStream.write(chunk);
});

readStream.on('end', () => {
    console.log('File Copied...');
    readStream.close();
    writeStream.close();
});