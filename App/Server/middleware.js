var morgan = require('morgan');
var bodyParser = require('body-parser');
var path = require('path');


//use morgan to log server requests
//use bodyParser to parse json attached to requests
//serve static from client folder

module.exports = function(app, express) { 
  app.use(morgan('dev'));
  app.use(bodyParser.json());
  app.use('/', express.static(path.join(__dirname, '../Client')));
  app.use('/dist', express.static(path.join(__dirname, '../../Compiled/transpiled')));
};