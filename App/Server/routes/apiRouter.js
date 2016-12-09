var router = require('express').Router();
var userHandler = require('../handlers/userHandler.js');
var eventHandler = require('../handlers/eventHandler.js');

router.post('/user', userHandler.signUpUser);
router.get('/user', userHandler.getUser);
router.put('/user', userHandler.updateUser);

router.get('/events', eventHandler.getEvent);
router.post('/events', eventHandler.postEvent);


module.exports = router; 