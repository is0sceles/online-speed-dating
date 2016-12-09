var router = require('express').Router();
var userHandler = require('../handlers/userHandler.js');
var passport = require('passport');
var ensureLoggedIn = require('connect-ensure-login').ensureLoggedIn;

router.post('/login', passport.authenticate('local'), function(req, res) {
  res.status(200).json(req.user);
});
router.post('/authorize', ensureLoggedIn('/'), function(req, res) {
  res.send('user is authorized');
});


module.exports = router; 