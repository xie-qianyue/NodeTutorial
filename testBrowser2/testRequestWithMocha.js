var request = require('request');
var should = require('should');

describe('local host', function(){
	it('localhost:3001/404 should have a 404 error', function(){
		request('http://localhost:3001/404', function(error, response, body){
			response.statusCode.should.eql(404);
		})
	});
	
	it('localhost:3001/ should have no problem', function(){
		request('http://localhost:3001/', function(error, response, body){
			response.statusCode.should.eql(200);
		})
	});
});

