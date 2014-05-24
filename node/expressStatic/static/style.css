/*
 * staticJS-server
 * Author: Tobias Nickel
 */

var express = require('express');
var app = express();
app.use(express.static(__dirname + '/static'));
// simple logger
app.use(function(req, res, next){
  console.log('%s %s', req.method, req.url);
  next();
});

// respond
app.use(function(req, res, next){
  res.send('not found');
});

app.listen(3000);