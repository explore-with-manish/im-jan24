const express = require('express');
const router = express.Router();

const employeeController = require('../controllers/employee-controller');

router.get('/', employeeController.index);

module.exports = router;