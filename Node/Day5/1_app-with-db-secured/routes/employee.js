const express = require('express');
const router = express.Router();

const employeeController = require('../controllers/employee-controller');

router.get('/', employeeController.getIndex);

router.get('/details/:recordId', employeeController.getDetails);

router.get('/create', employeeController.getCreateEmployee);

router.post('/create', employeeController.postCreateEmployee);

router.get('/edit/:recordId', employeeController.getEditEmployee);

router.post('/edit/:recordId', employeeController.postEditEmployee);

router.get('/delete/:recordId', employeeController.getDeleteEmployee);

router.post('/delete/:recordId', employeeController.postDeleteEmployee);

module.exports = router;