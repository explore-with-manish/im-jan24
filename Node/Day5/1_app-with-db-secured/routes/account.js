const express = require('express');
const router = express.Router();

const accountController = require('../controllers/account-controller');

router.get('/', function (request, response, next) {
    response.redirect('account/login');
});

router.get('/login', function (request, response, next) { 
    response.end();
});

module.exports = router;