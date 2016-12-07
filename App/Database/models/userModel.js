var mongoose = require('mongoose');
var schema = require('../schema.js');

User = mongoose.model('User', schema.userSchema);

exports.getUser = function(username, cb) {
  User.findOne({ username: username})
  .exec(function(err, user) {
    if (err) { cb(err); }
    cb(null, user);
  });
};

exports.createUser = function(user, cb) {
  User.create(user, function (err, user) {
    if (err) { return cb(err); }
    cb(null, user);
  });
};

exports.user = User;