const express = require('express');
const router = express.Router();

const accountController = require('../controllers/account-controller');

module.exports = function(passport) {
    router.get('/', function (request, response, next) {
        response.redirect('account/login');
    });
    
    router.get('/login', accountController.getLogin);
    
    router.post('/login', accountController.postLogin(passport));

    return router;
};