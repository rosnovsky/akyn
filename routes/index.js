const express = require('express');
const homeController = require('../controllers/homeController');
const postController = require('../controllers/postController');

const router = express.Router();

/* GET home page. */
router.get('/', homeController.getHomepage);
router.get('/:postId/edit', postController.editPost);
router.get('/:postId/', postController.showPost);
router.post('/:postId/delete', postController.deletePost);

module.exports = router;
