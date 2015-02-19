/**
 *  No concurrent request limit 
 *  The spider may be blacklisted by the site
 *  For limit the number of concurrent request : async.mapLimit or async.queue
 */

var express = require('express');
var superagent = require('superagent');
var cheerio = require('cheerio');
var eventproxy = require('eventproxy');

var doubanUrl = 'http://www.douban.com';

var app = express();

app.get('/simpleSpider', simpleSpider, function(req, res){
	res.send(req.items);
});

// next : route middleware
function simpleSpider(req, res, next){
	superagent
		.get(doubanUrl)
		.end(function (err, sres){
			if(err){
				// return next(err);
				return console.error(err);
			}
			
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

app.get('/spider', spider, function(req, res){
	res.send(req.group_topics);
});

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
			$('.group-list').find('.title > a').each(function(idx, element){
				// $ : object of JQuery convention
				var $element = $(element);
				var href = $element.attr('href');
				groupsUrls.push(href);
			});

			// multiple asyn coperation
			var ep = new eventproxy();
			// event : group_html
			// repeating times : groupsUrls.length
			ep.after('group_html', groupsUrls.length, function(group_topics){
				// map : creates a new array with the results of calling a provided function on every element in this array
				group_topics = group_topics.map(function(groupInfo){
					var groupUrl = groupInfo[0];
					var groupHtml = groupInfo[1];
					var $ = cheerio.load(groupHtml);
					return ({
						groupTitle:$('h1').text().trim(),
						href:groupUrl,
						firstTopic:$('.title > a').eq(0).attr('title'),
					});
				});
				console.log(group_topics);
				req.group_topics = group_topics;
				next();
			});

			groupsUrls.forEach(function(groupUrl){
				superagent.get(groupUrl)
					.end(function(err, res){
						console.log('fetch ' + groupUrl + ' successful');
						// register event 'group_html'
						ep.emit('group_html', [groupUrl, res.text]);
					});
			});	

		});			
}

// the first parameter : listening port 
// the second parameter : a call back function, called after the operation listen
app.listen(3001, function(){
	console.log('app is listening at port 3001');
});
