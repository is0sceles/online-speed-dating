var Event = require('../../Database/models/eventModel.js');
var db = require('../../Database/config.js');


//Request handlers
exports.getEvent = (req, res) => {
  console.log('called getEvent in handler'); //deleteMe
  Event.find({}).exec((err, results) => {
    if (err) { 
      throw err;
    }
    console.log('ending transmission...'); //deleteMe
    res.status(200).send(results);
  });
};
