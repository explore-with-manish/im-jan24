const express = require('express');
const router = express.Router();

const homeController = require('../controllers/home-controller');

router.get('/', homeController.index);

router.get('/about', homeController.about);

router.get('/contact', homeController.contact);

module.exports = router;