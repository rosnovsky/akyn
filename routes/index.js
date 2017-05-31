const express = require('express');
const router = express.Router();
const readController = require('../controllers/readController')


/* GET home page. */
router.get('/', readController.getHomepage);


module.exports = router;
