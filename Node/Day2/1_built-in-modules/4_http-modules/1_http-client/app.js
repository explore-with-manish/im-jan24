const https = require('https');
const fs = require('fs');

const url = "https://jsonplaceholder.typicode.com/posts";
const writeStream = fs.createWriteStream('./posts.json');

const request = https.request(url, { method: 'GET' }, (response) => {
    if (response.statusCode !== 200) {
        console.error(`Error: ${response.statusCode}`);
        return;
    }

    response.on('data', (chunk) => {
        writeStream.write(chunk);
    });

    response.on('close', () => {
        console.log("All data recieved...");
        writeStream.close();
    });
});

request.on('error', (err) => {
    console.error(err);
});

request.end();