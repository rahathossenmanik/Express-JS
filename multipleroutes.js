var express = require('express');
var app = express();
app.get('/get', function(req, res){
   res.send("Hello World!");
});
app.post('/post', function(req, res){
   res.send("You just called the post method at '/hello'!\n");
});
app.listen(4000);