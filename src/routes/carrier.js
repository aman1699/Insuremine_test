const express = require('express');
const router = express.Router();
const { carrier } = require('../controller/carrier');


router.post('/carrier', carrier);




module.exports = router;