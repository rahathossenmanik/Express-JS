var express = require('express');
var app = express();
app.set('view engine', 'pug');
app.set('views','./');
app.use(express.static('public'));
app.get('/static', function(req, res){
   res.render('staticfilepug');
});
app.listen(4000);