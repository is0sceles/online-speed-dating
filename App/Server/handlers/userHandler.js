var db = require('../../Database/config.js');
var User = require('../../Database/models/userModel.js');
var passport = require('passport');
exports.signUpUser = function (req, res) {
  var username = req.body.username;
  var password = req.body.password;

  User.findOne({ username: username, password: password })
    .exec(function (err, user) {
      if (!user) {
        var newUser = new User({
          username: username,
          password: password
        });
        newUser.save();
        res.send('user created');
      } else {
        res.send(404, 'Username already exists');
      }
    });
};

exports.getUser = function (req, res) {
  var username = req.query.username;
  var password = req.query.password;
  exports.getUserDB(username, password, function(err, user) {
    if (err) { console.error(err); }
    res.status(200).send(user); z;
  });
};

exports.authenticate = (
  passport.authenticate('local'),
  function(req, res) {
    console.log('inside authenticate');
    res.status(200).send(req.user);
  });


exports.getUserDB = function(username, password, cb) {
  User.findOne({ username: username, password: password })
  .exec(function(err, user) {
    if (err) { cb(err); }
    cb(null, user);
  });
};