var express = require('express');
var mongoose = require('mongoose');
var router = require('./router.js');

var app = express();
var PORT = process.env.PORT || 4321;

require('./middleware.js')(app, express);

app.use('/', router);

app.listen(PORT, function() {
  console.log('Express listening on port', PORT); 
});


module.exports = app;