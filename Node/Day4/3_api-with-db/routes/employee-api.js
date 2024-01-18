const express = require('express');
const cors = require('cors');

const router = express.Router();

const employeeApiController = require('../controllers/employee-api-controller');

// router.use(cors());

router.use(cors({
    origin: 'http://localhost:4000'
}));

// HTTP Get - http://localhost:3000/api/employees
// router.get('/', cors({
//     origin: 'http://localhost:4000'
// }), employeeApiController.getAll);

router.get('/', employeeApiController.getAll);

module.exports = router;