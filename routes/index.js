const express = require('express');
const readController = require('../controllers/readController');

const router = express.Router();

/* GET home page. */
router.get('/', readController.getHomepage);

module.exports = router;
