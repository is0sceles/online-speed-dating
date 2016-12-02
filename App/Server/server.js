var express = require('express');
var mongoose = require('mongoose');
<<<<<<< HEAD
var router = require('./router.js')

=======
>>>>>>> signin work EL

var app = express();
var PORT = process.env.PORT || 4321;

<<<<<<< HEAD
require('./middleware.js')(app, express);

app.use('/', router);
=======
>>>>>>> signin work EL

app.listen(PORT, function() {
  console.log('Express listening on port', PORT);
});


module.exports = app;