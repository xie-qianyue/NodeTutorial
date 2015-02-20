var main = require('../main');
var should = require('should');

// describe : group the test suit
describe('test/main.test.js', function(){
	// it : a test case
	it('should equal 55 when n === 10', function(){
		main.fibonacci(10).should.equal(55);
	});

	it('should equal 1 when n === 1', function(){
		main.fibonacci(1).should.equal(1);
	});

	it('should equal 55 when n === 10', function(){
		main.fibonacci(10).should.equal(55);
	});

	it('should throw when n > 10', function(){
		(function(){
			main.fibonacci(11);
		}).should.throw('n should <= 10');
	});

	it('should throw when n < 0', function(){
		(function(){
			main.fibonacci(-1);
		}).should.throw('n should >= 0');
	});

	it('should throw when n is not Number', function(){
		(function(){
			main.fibonacci('I am not a number');
		}).should.throw('n should be a Number');
	});
});
