const da = require('../data-access');
const Employee = require('../models/employee');

exports.getIndex = (request, response) => {
    da.getEmployees().then(employees => {
        response.render('employees/index', { pageTitle: 'Employees View', empList: employees, message: "" });
    }).catch(eMsg => {
        response.render('employees/index', { pageTitle: 'Employees View', empList: employees, message: eMsg });
    });
};

exports.getDetails = (request, response) => {
    var id = request.params.empid;

    da.getEmployee(id).then(employee => {
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
    var employee = new Employee(eid, ename);

    da.insertEmployee(employee).then(employee => {
        response.redirect('/employees');
    }).catch(eMsg => {
        response.render('employees/create', { pageTitle: 'Create Employee View', employee: employee, message: eMsg });
    });
};

exports.getEditEmployee = (request, response) => {
    var id = request.params.empid;

    da.getEmployee(id).then(employee => {
        response.render('employees/edit', { pageTitle: 'Employee Edit View', employee: employee, message: "" });
    }).catch(eMsg => {
        response.render('employees/edit', { pageTitle: 'Employee Edit View', employee: {}, message: eMsg });
    });
};

exports.postEditEmployee = (request, response) => {
    var id = request.params.empid;

    var { eid, ename } = request.body;
    var employee = new Employee(eid, ename);

    da.updateEmployee(id, employee).then(employee => {
        response.redirect('/employees');
    }, eMsg => {
        response.render("employees/edit", { pageTitle: "Edit Employee View", employee: employee, message: eMsg });
    });
};

exports.getDeleteEmployee = (request, response) => {
    var id = request.params.empid;

    da.getEmployee(id).then(employee => {
        response.render("employees/delete", { pageTitle: "Employee Delete View", employee: employee, message: "" });
    }).catch(eMsg => {
        response.render("employees/delete", { pageTitle: "Employee Delete View", employee: {}, message: eMsg });
    });
};

exports.postDeleteEmployee = (request, response) => {
    var id = request.params.empid;

    da.deleteEmployee(id).then(employee => {
        response.redirect('/employees');
    }).catch(eMsg => {
        response.render("employees/delete", { pageTitle: "Employee Delete View", employee: {}, message: eMsg });
    });
};