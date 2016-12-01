//var expect = require('chai').expect;
//var assert = require('chai').assert;
// describe('User', function() {
//   describe('#save()', function() {
//     it('should save without error', function(done) {
//       var user = new User('Luna');
//       user.save(function(err) {
//         if (err) done(err);
//         else done();
//       });
//     });
//   });
// });

// Database Testing
// describe('Connection', function() {
//   var db = new Connection,
//     tobi = new User('tobi'),
//     loki = new User('loki'),
//     jane = new User('jane');

//   beforeEach(function(done) {
//     db.clear(function(err) {
//       if (err) return done(err);
//       db.save([tobi, loki, jane], done);
//     });
//   });

//   describe('#find()', function() {
//     it('respond with matching records', function(done) {
//       db.find({type: 'User'}, function(err, res) {
//         if (err) return done(err);
//         res.should.have.length(3);
//         done();
//       });
//     });
//   });
// });

// Promises can be tested.
// const assert = require('assert');

// it('should complete this test', function (done) {
//   return new Promise(function (resolve) {
//     assert.ok(true);
//     resolve();
//   })
//     .then(done);
// });