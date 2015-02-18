var express = require('express');
var utility = require('utility');
var superagent = require('superagent');
var cheerio = require('cheerio');
var eventproxy = require('eventproxy');
var url = require('url');

var doubanUrl = 'http://www.douban.com';

var app = express();

// the second parameter : handler of the path '/'
app.get('/', function(req, res){
	res.send('Hello World');
});

// localhost:3001/?name=
app.get('/md5', function(req, res){
	var name = req.query.name;
	var nameMd5 = utility.md5(name);
	res.send(nameMd5);
});

app.get('/spider', spider, function(req, res){
	
	res.send(req.items);
});

// next : route middleware
function spider(req, res, next){
	superagent
		.get(doubanUrl)
		.end(function (err, sres){
			if(err){
				// return next(err);
				return console.error(err);
			}
			
			var groupsUrls = [];
			// $ : object of cheerio convention 
			var $ = cheerio.load(sres.text);
			var items = [];
			$('.group-list').find('.title > a').each(function(idx, element){
				// $ : object of JQuery convention
				var $element = $(element);
				items.push({
					title : $element.text(),	
					href : $element.attr('href')
				});
			});

			// pass the items to the next function
			req.items = items;
			next();
		});
} 

// the first parameter : listening port 
// the second parameter : a call back function, called after the operation listen
app.listen(3001, function(){
	console.log('app is listening at port 3001');
});
