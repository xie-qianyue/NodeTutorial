var Benchmark = require('benchmark');

// Preparation of the test
var arr = [];
for (var i = 0; i < 1000; i++) {
	arr[i] = 'value' + i;
}

function someFn(ix) {
	return ix * 5 + 1 / 3 * 8;

}

// create the test suite
var suite = new Benchmark.Suite;

// add tests
suite.add('basic for loop', function() {
		for (var i = 0; i < arr.length; i++) {
			someFn(i);
		}
	})
	.add('basic while loop', function() {
		var i = 0;
		while (i < arr.length) {
			someFn(i);
			i++;
		}
	})
	.add('for ... in loop', function() {
		for (var i in arr) {
			someFn(i);
		}
	})
	// add listeners, to output the result
	.on('cycle', function(event) {
		console.log(String(event.target));
	})
	.on('complete', function() {
		console.log('Fastest is ' + this.filter('fastest').pluck('name'));
	})
	// run async
	.run({
		'async': true
	});
