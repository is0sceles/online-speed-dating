var db = require('./App/Database/config.js');
var user = require('./App/Database/models/userModel.js');
var event = require('./App/Database/models/eventModel.js');

db.collections.users.drop( function() {
  console.log('collection was dropped');
});

db.collections.events.drop( function() {
  console.log('events collection was dropped');
});


<<<<<<< f8692ba9869f0337c8a6f44a11cfcaff9629160f

for (var i = 0; i < 5; i++) { 
=======
for (var i = 0; i < 5; i++) {
>>>>>>> create/update eventModel, schema and seed for events

  user.create({username: i, password: i, userinfo: 'a', name: 'b', age: i, location: 'c'}, function(err) {
    if (err) { console.error(err); }
  });
  
  event.create({usernames: ['spinoza', 'sagan', 'ada'], eventType: 'something', eventName: 'somethingElse', dateCreated: 2016}, function(err) {
    if (err) { console.error(err); }
  });
}