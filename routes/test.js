const express = require('express');
const router = express.Router();


// const testResult = require('../controllers/test');
// const testMid = require('../middleware/test');

router.route('/').get(testMid,testResult);
// router.get('/',testMid,testResult)

module.exports = router;