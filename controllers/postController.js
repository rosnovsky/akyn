// Const fetch = require('node-fetch');
const year = new Date().getFullYear();


exports.showPost = (req, res) => {
	res.render('index', {title: 'Post Title', year});
};

exports.editPost = (req, res) => {
	res.render('index', {title: 'Edit Post', year});
};

exports.deletePost = (req, res) => {
	res.render('index', {title: 'Delete Post', year});
};