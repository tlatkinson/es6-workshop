import {expect} from 'chai'

describe('Block Scoped Variables', () => {

	it.skip('is trapped inside of an `if` statement', () => {

		if (true) { // eslint-disable-line no-constant-condition
			// Change to `var` to `let`, so that 'b' is scoped inside of the if-statement
			var b = 1;
		}

		expect(()=> console.log(b)).to.throw('b is not defined');
	});


	it.skip('prevents loop counters from hoisting', () => {

		function doLoop() {
			// Change loop counter to `let` so that it is trapped inside of the loop, and can't be returned.
			for (var i = 0; i < 10; i++) {
				/* eslint no-empty:"off" */
			}
			return i;
		}

		expect(doLoop).to.throw('i is not defined');
	});


	it.skip('means that we can start using block statements', () => {

		// BLOCK STATEMENT
		{
			// Change to `const` declaration
			var d = 2;
		}

		expect(()=> console.log('d', d)).to.throw('d is not defined');
	});

});
