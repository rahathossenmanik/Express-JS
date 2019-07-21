var express = require('express');
var app = express();

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(function(req, res, next){
   console.log("First Middleware");
   next();
});
app.get('/', function(req, res, next){
   res.send("Route Handler");
   next();
});
app.use('/', function(req, res){
   console.log('Second Middleware');
});
app.listen(4000);