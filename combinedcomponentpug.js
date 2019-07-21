var express = require('express');
var app = express();
app.set('view engine', 'pug');
app.set('views','./');
app.get('/template', function(req, res){
	res.render('content',{
		user: {name: "Manik", age: "20"}
	});
});
app.listen(4000);