const express = require('express');
const router = express.Router();

const accountController = require('../controllers/account-controller');

router.post('/generatetoken', accountController.createToken);

module.exports = router;