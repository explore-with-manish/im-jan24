const express = require('express');
const router = express.Router();

const employeeController = require('../controllers/employee-controller');

router.get('/', employeeController.getIndex);

router.get('/details/:empid', employeeController.getDetails);

router.get('/create', employeeController.getCreateEmployee);

router.post('/create', employeeController.postCreateEmployee);

router.get('/edit/:empid', employeeController.getEditEmployee);

router.post('/edit/:empid', employeeController.postEditEmployee);

router.get('/delete/:empid', employeeController.getDeleteEmployee);

router.post('/delete/:empid', employeeController.postDeleteEmployee);

module.exports = router;