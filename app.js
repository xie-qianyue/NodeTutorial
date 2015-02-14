var express = require('express');
var utility = require('utility');

var app = express();

// the second parameter : handler of the path '/'
app.get('/', function(req, res){
	res.send('Hello World');
});

app.get('/md5', function(req, res){
	var name = req.query.name;
	var nameMd5 = utility.md5(name);
	res.send(nameMd5);
});

// the first parameter : listening port 
// the second parameter : a call back function, called after the operation listen
app.listen(3001, function(){
	console.log('app is listening at port 3001');
});
