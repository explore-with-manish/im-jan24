const express = require('express');
const router = express.Router();

router.get('/', (request, response) => {
    response.render('index', { pageTitle: 'Index View' });
});

router.get('/about', (request, response) => {
    response.render('about', { pageTitle: 'About View' });
});

router.get('/contact', (request, response) => {
    response.render('contact', { pageTitle: 'Contact View' });
});

module.exports = router;