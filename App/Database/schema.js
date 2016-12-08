var mongoose = require('mongoose');

var userSchema = mongoose.Schema({
  username: {type: String, required: true, index: { unique: true } },
<<<<<<< HEAD
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
=======
  password: String
>>>>>>> 3f344b6f0bf258e2788b963bc71dba6d1b1b3955
});
 
exports.userSchema = userSchema;
