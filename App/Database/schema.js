var mongoose = require('mongoose');

var userSchema = mongoose.Schema({
  username: {type: String, required: true, index: { unique: true } },
  password: String,
  userinfo: String,
  name: String,
  age: Number,
<<<<<<< 1d4592bd5d622420620ab925d9a52e921bf3ac82
  location: String,
  profileImg: String,
  gender: String
=======
  location: String
>>>>>>> implent vuex
});
 
exports.userSchema = userSchema;
