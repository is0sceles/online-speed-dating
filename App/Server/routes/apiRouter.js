var router = require('express').Router();
var userHandler = require('../handlers/userHandler.js');
var eventHandler = require('../handlers/eventHandler.js');

router.post('/user', userHandler.signUpUser);
router.get('/user', userHandler.getUser);
<<<<<<< 29ffebe1b01567c5b1c75c0df51055aa0c271ea0
router.put('/user', userHandler.updateUser);
=======

router.get('/events', eventHandler.getEvent);

>>>>>>> update to events files, schema, apiRouter & app.js

module.exports = router; 