var router = require('express').Router();
//require in helper functions


router.post('/user', function(res,req,next) { return req; });
router.get('/user', function(res,req,next) { return req; });
router.get('/users', function(res,req,next) { return req; });

module.exports = router;