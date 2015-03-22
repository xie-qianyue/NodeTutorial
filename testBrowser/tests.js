var should = chai.should();
describe('simple test', function() {
	it('should equal 0 when n === 0', function() {
		window.square(0).should.equal(0);
	});

	it('should equal 4 when n === 2', function() {
		window.square(2).should.equal(4);
	});
});
