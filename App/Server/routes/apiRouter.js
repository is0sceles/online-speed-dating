var router = require('express').Router();
var userHandler = require('../handlers/userHandler.js');
var eventHandler = require('../handlers/eventHandler.js');

router.post('/user', userHandler.signUpUser);
router.get('/user', userHandler.getUser);
router.put('/user', userHandler.updateUser);

router.get('/events', eventHandler.getEvents);
router.post('/events', eventHandler.postEvent);
router.put('/events', eventHandler.updateEvent);

router.get('/user/events', eventHandler.getSingleEvent);

module.exports = router; 