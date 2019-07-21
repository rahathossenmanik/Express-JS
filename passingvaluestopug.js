var express = require('express');
var app = express();
app.set('view engine', 'pug');
app.set('views','./');
app.get('/template', function(req, res){
   res.render('dynamic', {
      name: "MANIKAREA", 
      url:"http://www.manikarea.home.blog"
   });
});
app.listen(4000);