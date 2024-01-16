// const http = require('http');

// const server = http.createServer((request, response)=>{
//     // console.log(request.url);
//     // console.log(request.headers);
//     // response.write("Hello World");

//     response.setHeader('content-type', 'text/html');
//     // response.setHeader('content-type', 'text/plain');
//     // response.setHeader('content-type', 'application/json');
//     // response.setHeader('content-type', 'application/pdf');

//     response.write("<h1>Hello from Node Server</h1>");
//     response.end();
// });

// server.listen(3000);

// function onError(err) {
//     console.error(err);
// }

// function onListening() {
//     var address = server.address();
//     console.log("Server started listening on port " + address.port + "...");
// }

// server.on('error', onError);
// server.on('listening', onListening);

// ------------------------------------------------

const http = require('http');
const fs = require('fs');

const server = http.createServer((request, response) => {
    fs.readFile('./index.html', 'utf-8', (err, htmlContent) => {
        if (err) {
            response.setHeader('content-type', 'text/plain');
            response.statusCode = 404;
            response.end("Page not found");
        } else {
            response.setHeader('content-type', 'text/html');
            response.statusCode = 200;
            response.write(htmlContent);
            response.end();
        }
    });
});

server.listen(3000);

function onError(err) {
    console.error(err);
}

function onListening() {
    var address = server.address();
    console.log("Server started listening on port " + address.port + "...");
}

server.on('error', onError);
server.on('listening', onListening);