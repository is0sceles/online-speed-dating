var db = require('./App/Database/config.js');
var user = require('./App/Database/models/userModel.js');
// console.log(db);
console.log(user.user);
// // Step 1: Drop old data
db.collections.users.drop( function() {
  console.log('collection was dropped');
});

// Step 2: Add data from `data.json`
for (var i = 0; i < 5; i++) { 
  user.create({username: i}, function(err) {
    if (err) { console.error(err); }
  });
}