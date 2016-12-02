var express = require('express');
var mongoose = require('mongoose');
var path = require ('path');

var app = express();
var PORT = process.env.PORT || 4321;

app.use('/', express.static(path.join(__dirname, '../Client')));
app.use('/dist', express.static(path.join(__dirname, '../../Compiled/transpiled')));

app.listen(PORT, function() {
  console.log('Express listening on port', PORT);
});


module.exports = app;