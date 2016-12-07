var userModel = require('../models/userModels.js');

exports.signUpUser = function (req, res) {
  var username = req.body.username;
  var password = req.body.password;

  userModel.getUser(username, function(err, user) {
    if (!user) {
      userModel.createUser({username: username, password: password}, function(err, user) {
        res.send('user created');
      });
    } else {
      res.status(401).send('Username already exists');
    }
  });
};

exports.getUser = function (req, res) {
  userModel.getUser(req.query.username, function(err, user) {
    if (err) { console.error(err); }
    res.status(200).send(user);
  });
};


