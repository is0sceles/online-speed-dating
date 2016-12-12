var db = require('./App/Database/config.js');
var user = require('./App/Database/models/userModel.js');
var event = require('./App/Database/models/eventModel.js');

db.collections.users.drop( function() {
  console.log('collection was dropped');
});

db.collections.events.drop( function() {
  console.log('events collection was dropped');
});



// for (var i = 0; i < 5; i++) {
  
//   // event.create({eventType: 'All', eventName: 'Menergy', date: 2016}, function(err) {
//   //   if (err) { console.error(err); }
//   // });

// }

user.create({username: 'admin', password: 'a', admin: true}, function(err) {
  if (err) { console.error(err); }
});
 