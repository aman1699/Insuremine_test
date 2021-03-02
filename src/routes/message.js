const express = require('express');
const router = express.Router();
const { Messages } = require('../controller/message');


router.post('/message', Messages);




module.exports = router;