const express = require('express');

const router = express.Router();

router.post('/signup', require('./userSignupPost'));

module.exports = router;