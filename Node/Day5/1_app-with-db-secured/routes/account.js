const express = require('express');
const router = express.Router();

const accountController = require('../controllers/account-controller');

router.get('/', function (request, response, next) {
    response.redirect('account/login');
});

router.get('/login', accountController.getLogin);

router.post('/login', accountController.postLogin);

module.exports = router;