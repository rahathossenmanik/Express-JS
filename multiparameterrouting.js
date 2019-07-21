var express = require('express');
var app = express();
app.get('/:name/:gpa/:exam', function(req, res) {
   res.send(req.params.name +" obtained gpa " + req.params.gpa + " in exam " + req.params.exam);
});
app.listen(4000);