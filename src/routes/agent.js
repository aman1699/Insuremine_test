const express = require('express');
const router = express.Router();
const { agent } = require('../controller/agent');


router.post('/agent', agent);




module.exports = router;