// // require('./logger.js');
// // require('./logger.js');

// const logger1 = require('./logger.js');
// const logger2 = require('./logger.js');

// console.log(logger1 === logger2);

// -------------------------------

// const logger1 = require('./logger');
// const logger1 = require('./logger/my-logger');
// const logger1 = require('./logger');

// ------------------------------------------

// const loggerSingle = require('./loggerSingle');

// const l1 = loggerSingle.getLogger();
// const l2 = loggerSingle.getLogger();

// console.log(l1 === l2);

// -------------------------------------------

// const loggerS = require('./loggerS');

// const l1 = loggerS;
// const l2 = loggerS;

// console.log(l1 === l2);

// --------------------------------------

const loggerFactory = require('./loggerFactory');

let dbLogger;
let flLogger;

dbLogger.log('Hello from App Module');
flLogger.log('Hello from App Module');

let dbLogger1 = loggerFactory.DBLFactory.getLogger();
let dbLogger2 = loggerFactory.DBLFactory.getLogger();

console.log(dbLogger1 === dbLogger2);