var mongoose = require('mongoose');

var userSchema = mongoose.Schema({
  username: {type: String, required: true, index: { unique: true } },
  password: String,
  userinfo: String,
  name: String,
  age: Number,
  location: String,
  profileImg: String,
  gender: String,
  admin: Boolean,
  loggedIn: Boolean
});
 
exports.userSchema = userSchema;
