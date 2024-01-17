const { getEmployees } = require('../data-access');

exports.index = (request, response) => {
    response.render('employees/index', { pageTitle: 'Employees View', empList: getEmployees() });
};
