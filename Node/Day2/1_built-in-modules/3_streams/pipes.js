// const fs = require('fs');

// const readStream = fs.createReadStream('./file1.txt', 'utf-8');
// const writeStream = fs.createWriteStream('./file3.txt', 'utf-8');

// readStream.pipe(writeStream);
// console.log("File Copied...");

// ---------------------------------------------
const fs = require('fs');
const zlib = require('zlib');

fs.createReadStream('./file1.txt')
    .pipe(zlib.createGzip())
    .pipe(fs.createWriteStream('./file1.txt.gz'));

console.log("File Compressed...");