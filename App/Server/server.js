var express = require('express');
var mongoose = require('mongoose');

var app = express();
var PORT = process.env.PORT || 4321;

app.listen(PORT, function() {
  console.log('Express listening on port', PORT);
});

module.exports = app;