// Read and Return the file based on the URL
// Or return file not found if the url does not match a filename

// localhost:3000/1 - Read and Return 1.pdf
// localhost:3000/2 - Read and Return 2.pdf

const http = require('http');
const fs = require('fs');

var server = http.createServer((request, response) => {
    if(request.url !== '/favicon.ico') {
        const filePath = `${__dirname}${request.url}.pdf`;
        const readStream = fs.createReadStream(filePath);

        response.setHeader('content-type', 'application/pdf');

        readStream.pipe(response);

        // readStream.on('data', (chunk)=>{
        //     response.write(chunk);
        // });

        // readStream.on('end', ()=>{
        //     response.end();
        // });

        readStream.on('error', (err)=>{
            response.setHeader('content-type', 'text/plain');
            response.statusCode = 404;
            response.end('File not found');
        });
    }
});

server.listen(3000);

function onError(err) {
    console.log(err);
}

function onListening() {
    var address = server.address();
    console.log("Server started on port: ", address.port);
}

server.on('error', onError);
server.on('listening', onListening);