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
  
  event.create({usernames: [i, i + 1, i + 2, i + 3], eventType: 'All', eventName: 'Menenergy', date: 2016}, function(err) {
    if (err) { console.error(err); }
  });

}

for (var j = 0; j < 20; j++) {
  user.create({username: j, events: ['Menergy', 'FunParty'], password: j, userinfo: 'a', name: 'b', age: j, location: 'c', admin: true}, function(err) {
    if (err) { console.error(err); }
  });
}