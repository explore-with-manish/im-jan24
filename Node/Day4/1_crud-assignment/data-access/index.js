const { readData, writeData } = require("../utilities/file-handler");

let employees = [];

(async function () {
    try {
        employees = await readData();
    } catch (err) {
        employees = [];
    }
})();

exports.getEmployees = () => {
    return new Promise((resolve, reject) => {
        if (employees.length)
            resolve(employees);
        else
            reject("No Employees Found");
    });
}

exports.getEmployee = (id) => {
    return new Promise((resolve, reject) => {
        if (employees.length)
            resolve(employees.find(e => e.id === parseInt(id)));
        else
            reject("Employee Not Found");
    });
}

exports.insertEmployee = (employeeToInsert) => {
    return new Promise((resolve, reject) => {
        employees = [...employees, employeeToInsert];
        writeData(employees).then(data => {
            employees = [...data];
            resolve(employees.find(e => e.id === parseInt(employeeToInsert.id)));
        }).catch(err => {
            reject(err);
        });
    });
}

exports.updateEmployee = (id, employeeToUpdate) => {
    return new Promise((resolve, reject) => {
        var itemIndex = employees.findIndex(e => e.id === parseInt(id));
        var tempEmployees = [...employees];
        tempEmployees.splice(itemIndex, 1, { ...employeeToUpdate });
        employees = [...tempEmployees];

        writeData(employees).then(data => {
            employees = data;
            resolve(employees.find(e => e.id === parseInt(id)));
        }, err => {
            reject(err);
        })
    });
}

exports.deleteEmployee = (id) => {
    return new Promise((resolve, reject) => {
        employees = [...employees.filter(e => e.id !== parseInt(id))];

        writeData(employees).then(data => {
            employees = data;
            resolve('Success, Deleting Employee...');
        }, err => {
            reject(err);
        })
    });
}