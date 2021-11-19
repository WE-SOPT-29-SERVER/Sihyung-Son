const express = require('express');

const router = express.Router();

router.post('/signup', require('./userSignupPost'));
router.get('/:user:id', require('./userListGET'));

module.exports = router;