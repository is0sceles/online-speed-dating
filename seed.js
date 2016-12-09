var db = require('./App/Database/config.js');
var user = require('./App/Database/models/userModel.js');
var event = require('./App/Database/models/eventModel.js');

db.collections.users.drop( function() {
  console.log('collection was dropped');
});

db.collections.events.drop( function() {
  console.log('events collection was dropped');
});



for (var i = 0; i < 5; i++) {


  user.create({username: i, password: i, userinfo: 'a', name: 'b', age: i, location: 'c', admin: true}, function(err) {
    if (err) { console.error(err); }
  });
  
  event.create({usernames: ['spinoza', 'sagan', 'ada'], eventType: 'All', eventName: 'Menenergy', date: 2016}, function(err) {
    if (err) { console.error(err); }
  });
}