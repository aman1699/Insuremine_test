const express = require('express');
const router = express.Router();
const { lob } = require('../controller/lob');


router.post('/lob', lob);




module.exports = router;