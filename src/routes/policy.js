const express = require('express');
const router = express.Router();
const { Policy,getPolicy } = require('../controller/policy');


router.post('/policy', Policy);
router.get('/get/policy',getPolicy)




module.exports = router;