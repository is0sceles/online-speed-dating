var db = require('../../config.js');
var User = require('../../models/userModel.js');

exports.signUpUser = function(req, res) {
  var username = req.body.username;

  User.findOne({username: username})
    .exec(function(err, user) {
      if (!user) {
        var newUser = new User ({
          username: username
        });
      } else {
        console.log('Username already used');
        res.redirect('/login');
      }
    });
};

exports.loginUser = function(req, res) {
  var username = req.body.username;

  User.findOne({username: username})
    .exec(function(err, user) {
      if (!user) {
        console.log('Username does not exist');
        res.redirect('/signup');

      } else {
        res.status(200).send(user.username); 
      }
    });
};