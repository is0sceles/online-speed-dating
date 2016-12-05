var router = require('express').Router();
//require in helper functions


router.post('/user', function(req, res, next) { return req; });
router.get('/user', function(req, res, next) { return req; });
router.get('/users', function(req, res, next) { return req; });

module.exports = router; 