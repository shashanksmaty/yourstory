const express = require('express');
const router = express.Router();
const {ensureAuthenticated} = require('../helpers/auth');

// index route
router.get('/', (req, res) => {
	res.render('index/index', {
		header: "YourStory"
	});
});

// dashboard route
router.get('/dashboard', ensureAuthenticated, (req, res) => {
	res.render('index/dashboard', {
		header: "YourStory"
	});
});

module.exports = router;