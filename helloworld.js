var express = require('express');
var app = express();
app.get('/', function(req, res){
   res.send("Hello Manik!");
});
app.listen(4000);