const express = require('express');
const router = express.Router();

const employeeApiController = require('../controllers/employee-api-controller');

// HTTP Get - http://localhost:3000/api/employees
router.get('/', employeeApiController.getAll);

module.exports = router;