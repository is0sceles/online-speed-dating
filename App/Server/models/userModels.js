var db = require('../../Database/config.js');
var User = require('../../Database/models/userModel.js');

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