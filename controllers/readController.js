// Const fetch = require('node-fetch');

exports.getHomepage = (req, res) => {
	const year = new Date().getFullYear();
	res.render('index', {title: 'Akyn || Blog Engine', year});
};
