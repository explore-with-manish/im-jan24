const express = require('express');
const cors = require('cors');

const router = express.Router();

const employeeApiController = require('../controllers/employee-api-controller');
const { validateToken } = require('../controllers/account-controller');

router.use(cors());

router.use(validateToken);

router.get('/', employeeApiController.getAll);

router.get('/:recordId', employeeApiController.get);

router.post('/', employeeApiController.create);

router.put('/:recordId', employeeApiController.update);

router.delete('/:recordId', employeeApiController.delete);

module.exports = router;