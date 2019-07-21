var express = require('express');
var app = express();
app.set('view engine', 'pug');
app.set('views','./');
app.get('/template', function(req, res){
   res.render('firstpug');
});
app.listen(4000);