const da = require('../data-access');
const { EmployeeDTO } = require('../dtos/employee-dto');

exports.getAll = (request, response) => {
    da.getEmployees().then(result => {
        var employees = result.map(r => new EmployeeDTO(r._id, r.id, r.name));
        response.status(200).json({ data: employees, message: "Success" });
    }).catch(eMsg => {
        response.status(500).json({ data: [], message: eMsg });
    });
};

exports.get = (request, response) => {
    var recordId = request.params.recordId;

    da.getEmployee(recordId).then(employee => {
        response.status(200).json({ data: employee, message: "Success, getting Employee" });
    }).catch(eMsg => {
        response.status(500).json({ data: null, message: "Error, getting Employee" });
    });
};

exports.create = (request, response) => {
    var { id, name } = request.body;
    var employee = { id: parseInt(id), name: name };

    da.insertEmployee(employee).then(employee => {
        response.status(201).json({ data: employee, message: "Success, creating Employee" });
    }).catch(eMsg => {
        response.status(500).json({ data: null, message: "Error, creating Employee" });
    });
};

exports.update = (request, response) => {
    var recordId = request.params.recordId;

    var { id, name } = request.body;
    var employee = { id: parseInt(id), name: name };

    da.updateEmployee(recordId, employee).then(employee => {
        response.status(200).json({ data: employee, message: "Success, updating Employee" });
    }, eMsg => {
        response.status(500).json({ data: employee, message: "Error, updating Employee" });
    });
};

exports.delete = (request, response) => {
    var recordId = request.params.recordId;

    da.deleteEmployee(recordId).then(employee => {
        response.status(200).json({ data: recordId, message: "Success, deleting Employee" });
    }).catch(eMsg => {
        response.status(500).json({ data: recordId, message: "Error, deleting Employee" });
    });
};