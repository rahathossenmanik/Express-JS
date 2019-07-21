var express = require('express');
var app = express();
app.use(function(req, res, next){
   console.log("A new request received at " + Date.now());
   next();
});
app.get('/things', function(req, res){
   res.send('Things does not matter.');
});
app.listen(4000);