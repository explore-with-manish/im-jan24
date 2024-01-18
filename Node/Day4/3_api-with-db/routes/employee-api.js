const express = require('express');
const cors = require('cors');

const router = express.Router();

const employeeApiController = require('../controllers/employee-api-controller');

// Allow All
router.use(cors());

// Allow Specific Origin
// router.use(cors({ origin: 'http://localhost:4000' }));


// CORS config at the route level
// router.get('/', cors({ origin: 'http://localhost:4000' }), employeeApiController.getAll);

// HTTP GET - http://localhost:3000/api/employees - (Get All Employees)
router.get('/', employeeApiController.getAll);

// HTTP GET - http://localhost:3000/api/employees/122434234 - (Get Employee via Id)
router.get('/:recordId', employeeApiController.get);

// HTTP POST - http://localhost:3000/api/employees + Data in Body - (Create Employee)
router.post('/', employeeApiController.create);

// HTTP PUT - http://localhost:3000/api/employees/122434234 + Data in Body - (Update Employee via Id)
router.put('/:recordId', employeeApiController.update);

// HTTP DELETE - http://localhost:3000/api/employees/122434234 - (Delete Employee via Id)
router.delete('/:recordId', employeeApiController.delete);

module.exports = router;