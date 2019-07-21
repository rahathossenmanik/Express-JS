var express = require('express');
var app = express();
app.get('/:id([0-9]{5})', function(req, res){
   res.send('ID: ' + req.params.id);
});
app.listen(4000);