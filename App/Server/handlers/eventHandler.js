var Event = require('../../Database/models/eventModel.js');
var db = require('../../Database/config.js');


//Request handlers
exports.getEvent = (req, res) => {
  // console.log('called getEvent in handler'); //deleteMe
  Event.find({}).exec((err, results) => {
    if (err) { 
      throw err;
    }
    // console.log('ending transmission...'); //deleteMe
    res.status(200).send(results);
  });
};

exports.postEvent = (req, res) => {
  let event = new Event(req.body);
  event.save((err, result) => {
    if (err) { 
      console.error('Could not save to database..', err);
      res.status(400).send(result);
    } else {
      res.status(200).send(result);
    }
  });
};

exports.getSingleEvent = (req, res) => {
  Event.where({ _id: req.body._id}).findOne({ _id: req.body._id}, (err, event) => {
    if(err) {
      res.status(404).send();
    } else {
      res.status(200).send(event)
    }
  });
}