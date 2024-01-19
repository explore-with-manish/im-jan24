const da = require('../data-access');

exports.getIndex = (request, response) => {
    da.getEmployees().then(employees => {
        response.render('employees/index', { pageTitle: 'Employees View', empList: employees, message: "" });
    }).catch(eMsg => {
        response.render('employees/index', { pageTitle: 'Employees View', empList: employees, message: eMsg });
    });
};

exports.getDetails = (request, response) => {
    var recordId = request.params.recordId;

    da.getEmployee(recordId).then(employee => {
        response.render('employees/details', { pageTitle: 'Employee Details View', employee: employee, message: "" });
    }).catch(eMsg => {
        response.render('employees/details', { pageTitle: 'Employee Details View', employee: {}, message: eMsg });
    });
};

exports.getCreateEmployee = (request, response) => {
    response.render('employees/create', { pageTitle: 'Create Employee View', employee: {}, message: "" });
};

exports.postCreateEmployee = (request, response) => {
    var { eid, ename } = request.body;
    var employee = {id: parseInt(eid), name: ename};

    da.insertEmployee(employee).then(employee => {
        response.redirect('/employees');
    }).catch(eMsg => {
        response.render('employees/create', { pageTitle: 'Create Employee View', employee: employee, message: eMsg });
    });
};

exports.getEditEmployee = (request, response) => {
    var recordId = request.params.recordId;

    da.getEmployee(recordId).then(employee => {
        response.render('employees/edit', { pageTitle: 'Employee Edit View', employee: employee, message: "" });
    }).catch(eMsg => {
        response.render('employees/edit', { pageTitle: 'Employee Edit View', employee: {}, message: eMsg });
    });
};

exports.postEditEmployee = (request, response) => {
    var recordId = request.params.recordId;

    var { eid, ename } = request.body;
    var employee = {id: parseInt(eid), name: ename};

    da.updateEmployee(recordId, employee).then(employee => {
        response.redirect('/employees');
    }, eMsg => {
        response.render("employees/edit", { pageTitle: "Edit Employee View", employee: employee, message: eMsg });
    });
};

exports.getDeleteEmployee = (request, response) => {
    var recordId = request.params.recordId;

    da.getEmployee(recordId).then(employee => {
        response.render("employees/delete", { pageTitle: "Employee Delete View", employee: employee, message: "" });
    }).catch(eMsg => {
        response.render("employees/delete", { pageTitle: "Employee Delete View", employee: {}, message: eMsg });
    });
};

exports.postDeleteEmployee = (request, response) => {
    var recordId = request.params.recordId;

    da.deleteEmployee(recordId).then(employee => {
        response.redirect('/employees');
    }).catch(eMsg => {
        response.render("employees/delete", { pageTitle: "Employee Delete View", employee: {}, message: eMsg });
    });
};