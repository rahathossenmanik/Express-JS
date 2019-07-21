var express = require('express');
var bodyParser = require('body-parser');
var multer = require('multer');
var upload = multer();
var app = express();
app.set('view engine', 'pug');
app.set('views', './');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(upload.array()); 
app.use(express.static('public'));
app.get('/', function(req, res){
	res.render('formdata');
});
app.post('/', function(req, res){
	console.log(req.body);
	res.send("Recieved Your Request!");
});
app.listen(4000);