const http = require('http');
const express = require('express');

const app = express();

app.set('view engine', 'pug');

var employees = [{ id: 1, name: "Manish" },
{ id: 2, name: "Abhijeet" },
{ id: 3, name: "Ram" },
{ id: 4, name: "Abhishek" },
{ id: 5, name: "Ramakant" }];

app.get('/', (request, response) => {
    response.render('index', { pageTitle: 'Index View' });
});

app.get('/about', (request, response) => {
    response.render('about', { pageTitle: 'About View' });
});

app.get('/contact', (request, response) => {
    response.render('contact', { pageTitle: 'Contact View' });
});

app.get('/employees', (request, response) => {
    response.render('employees/index', { pageTitle: 'Employees View', empList: employees });
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