var Browser = require('zombie');
var should = require('should');

describe('test.js', function() {

	browser = new Browser();

	it("localhost:3001/404 should have a 404 error", function() {
		browser.visit('http://localhost:3001/404', function() {
			browser.statusCode.should.eql(404);
		});
	});

	it("localhost:3001 should have no problem", function(){
		browser.visit('http://localhost:3001/', function() {
			browser.statusCode.should.eql(200);
		});
	});
});
