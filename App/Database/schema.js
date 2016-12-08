var mongoose = require('mongoose');

var userSchema = mongoose.Schema({
  username: {type: String, required: true, index: { unique: true } },
<<<<<<< HEAD
  password: String,
  userinfo: String,
  name: String,
  age: Number,
  location: String,
  profileImg: String,
  gender: String
=======
  password: String
>>>>>>> parent of 1366b7b... Merge pull request #32 from elau002/working
});
 
exports.userSchema = userSchema;
