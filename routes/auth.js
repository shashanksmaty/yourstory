const express = require('express');
const router = express.Router();
const passport = require('passport');

// google auth route
router.get('/google', passport.authenticate('google', {
	scope: ['profile', 'email']
}));

// google auth callback
router.get('/google/callback', passport.authenticate('google', {
 failureRedirect: '/' 
}), (req, res) => {
	res.redirect('/dashboard');
});

router.get('/verify', (req, res) => {
	if(req.user){
		console.log(req.user);
	} else {
		console.log("Not Auth");
	}
});

router.get('/logout', (req, res) => {
	req.logout();
	res.redirect('/');
});

module.exports = router;