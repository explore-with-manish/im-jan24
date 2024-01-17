const Employee = require('../models/employee');

let employees = [
    new Employee(1, "Manish"),
    new Employee(2, "Abhijeet"),
    new Employee(3, "Ram"),
    new Employee(4, "Abhishek"),
    new Employee(5, "Ramakant")
];

exports.getEmployees = () => {
    return employees;
}