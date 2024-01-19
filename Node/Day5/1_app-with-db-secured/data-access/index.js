const Employee = require('../models/employee');

exports.getEmployees = async () => {
    try {
        const allEmployees = await Employee.find();
        return allEmployees;
    }
    catch (err) {
        throw Error(`Could not fetch Employees ${err.message}`);
    }
}

exports.getEmployee = async (recordId) => {
    try {
        const singleEmployee = await Employee.findById({ _id: recordId });
        return singleEmployee;
    }
    catch (err) {
        throw Error(`Could not fetch Employee ${err.message}`);
    }
}

exports.insertEmployee = async (employeeToInsert) => {
    try {
        const response = await Employee(employeeToInsert).save();
        return response;
    }
    catch (err) {
        throw Error(`Could not create Employee ${err.message}`);
    }
}

exports.updateEmployee = async (recordId, employeeToUpdate) => {
    try {
        const response = await Employee.findOneAndUpdate({ _id: recordId }, employeeToUpdate);
        return response;
    }
    catch (err) {
        throw Error(`Could not update Employee ${err.message}`);
    }
}

exports.deleteEmployee = async (recordId) => {
    try {
        const response = await Employee.findOneAndDelete({ _id: recordId });
        return response;
    }
    catch (err) {
        throw Error(`Could not delete Employee ${err.message}`);
    }
}