var async = require('async');

var concurrencyCount = 0;
var limitNumber = 5;

var fetchUrl = function(url, callback){
	// delay shoule be a random millesecond less than 2000
	var delay = parseInt((Math.random() * 10000000) % 2000);
	concurrencyCount++;
	console.log('The concurrency number request to ' + concurrencyCount + ' : ' + url + ' ,taking ' + delay + ' milliseconds.');
	setTimeout(function(){
		concurrencyCount--;
		// callback function apply to the async.mapLimit
		callback(null, url+' html content');
	}, delay);
};

var urls = [];
for(var i=0;i<30;i++){
	urls.push('http://datasource_'+i);
}

// 3th parameter : a function apply to the items in the 2nd parameter
// 				   this function should include a callback function for error process
// 4th parameter : a function called when the iteration is terminated or error occurs
async.mapLimit(urls, limitNumber, function(url, callback){
	fetchUrl(url, callback);
}, function(err, result){
	console.log('Programme terminated.');
	console.log(result);
});	
