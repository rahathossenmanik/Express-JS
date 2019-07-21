var express = require('express');
var app = express();
app.get('*', function(req, res){
   res.send('404 Not Found');
});
app.listen(4000);