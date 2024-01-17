const http = require('http');
const express = require('express');
const logger = require('morgan');

const app = express();

app.set('view engine', 'pug');

var employees = [{ id: 1, name: "Manish" },
{ id: 2, name: "Abhijeet" },
{ id: 3, name: "Ram" },
{ id: 4, name: "Abhishek" },
{ id: 5, name: "Ramakant" }];

app.use(logger('dev'));

// app.use((request, response, next) => {
//     console.log("Request - Middleware One");
//     next();
//     console.log("Response - Middleware One");
// });

// app.use((request, response, next) => {
//     console.log("Request - Middleware Two");
//     next();
//     console.log("Response - Middleware Two");
// });

// app.use((request, response, next) => {
//     var stTime = new Date().getTime();
//     next();
//     var enTime = new Date().getTime();
//     var tTime = enTime - stTime;
//     console.log(`${request.url} - Total Request Time: ${tTime} ms`);
// });

app.get('/', (request, response) => {
    // console.log("Index Request Handler");
    // throw new Error('Some Error Occured');
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

app.use((error, request, response, next) => {
    console.log(error.message);
    response.statusCode = 500;
    response.send("Server Error...");
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