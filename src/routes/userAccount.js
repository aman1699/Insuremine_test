const express = require('express');
const router = express.Router();
const { userAccount } = require('../controller/userAccount');


router.post('/account', userAccount);




module.exports = router;