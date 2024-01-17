const express = require('express');
const router = express.Router();

const { getEmployees } = require('../data-access');

router.get('/', (request, response) => {
    response.render('employees/index', { pageTitle: 'Employees View', empList: getEmployees() });
});

module.exports = router;