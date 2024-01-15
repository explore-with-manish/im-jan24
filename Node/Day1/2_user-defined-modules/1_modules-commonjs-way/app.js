// Import an entire module for side effects only, without importing anything. 
// This runs the module's global code, but doesn't actually import any values.
// require('./lib.js');

// const lib = require('./lib.js');
// console.log(lib);

// console.log(lib.firstname);
// console.log(lib.lastname);
// console.log(lib.hello('Hello World'));

// --------- Load and instantiate the Employee Object  
// const lib = require('./lib.js');
// let e1 = new lib.Employee("Manish");
// console.log(e1.getName());
// e1.setName("Ramakant");
// console.log(e1.getName());

// ---------------------------- Ibject Destructuring
const { Employee } = require('./lib.js');
let e1 = new Employee("Manish");
console.log(e1.getName());
e1.setName("Ramakant");
console.log(e1.getName());
