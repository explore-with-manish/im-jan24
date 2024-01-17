const http = require('http');
const express = require('express');

const app = express();

var employees = [{ id: 1, name: "Manish" },
{ id: 2, name: "Abhijeet" },
{ id: 3, name: "Ram" },
{ id: 4, name: "Abhishek" },
{ id: 5, name: "Ramakant" }];

app.get('/', (request, response) => { 
    response.sendFile(__dirname + '/public/index.html');
});

app.get('/about', (request, response) => { 
    response.sendFile(__dirname + '/public/about.html');
});

app.get('/contact', (request, response) => { 
    response.sendFile(__dirname + '/public/contact.html');
});

app.get('/data', (request, response) => { 
    // const data = employees;
    const data = require('./posts.json'); 
    response.json(data);
});

// ----------------------------------------- Hosting
const server = http.createServer(app);

server.listen(3000);

function onError(err) {
    console.log(err);
}

function onListening(err) {
    var address = server.address();
    console.log("Server started on port: ", address.port);
}

server.on('error', onError);
server.on('listening', onListening);