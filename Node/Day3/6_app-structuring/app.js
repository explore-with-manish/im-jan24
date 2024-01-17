const express = require('express');
const logger = require('morgan');
const favicon = require('serve-favicon');

const app = express();

const indexRouter = require('./routes/index');
const employeeRouter = require('./routes/employees');

app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(favicon(__dirname + "/public/images/favicon.png"));

app.use('/', indexRouter);

app.use('/employees', employeeRouter);

app.use((error, request, response, next) => {
    console.log(error.message);
    response.statusCode = 500;
    response.send("Server Error...");
});

module.exports = app;
