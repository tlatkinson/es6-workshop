import {expect} from 'chai'

describe('Default Values', () => {
	it.skip('can be triggered when the incoming argument is undefined', () => {

		function test(name = 'Mercury') {
			return name
		}

		expect(test('Aaron')).to.equal(/*ENTER YOUR GUESS HERE*/);
		expect(test(undefined)).to.equal(/*ENTER YOUR GUESS HERE*/);
		expect(test(null)).to.equal(/*ENTER YOUR GUESS HERE*/);
		expect(test()).to.equal(/*ENTER YOUR GUESS HERE*/);

	});

	it.skip('can trigger a function call', () => {
		let triggerCount = 0;

		function test(name = getDefault()) {
			return name;
		}

		function getDefault() {
			triggerCount++;
			return 'Mercury';
		}

		expect(triggerCount).to.equal(/*ENTER YOUR GUESS HERE*/);
		expect(test('Aaron')).to.equal(/*ENTER YOUR GUESS HERE*/);
		expect(test()).to.equal(/*ENTER YOUR GUESS HERE*/);
		expect(test(null)).to.equal(/*ENTER YOUR GUESS HERE*/);
		expect(triggerCount).to.equal(/*ENTER YOUR GUESS HERE*/);

	})

});

describe('Rest Parameters', () => {

	it.skip('catch non-specified params', () => {

		function resty(first, second, ...others) {
			return others
		}

		expect(resty().length).to.equal(/*ENTER YOUR GUESS HERE*/);
		expect(resty(1).length).to.equal(/*ENTER YOUR GUESS HERE*/);
		expect(resty(1, 2).length).to.equal(/*ENTER YOUR GUESS HERE*/);
		expect(resty(1, 2, 3).length).to.equal(/*ENTER YOUR GUESS HERE*/);
		expect(resty(1, 2, 3, undefined, 5, undefined, 7, undefined, 9, 10).length).to.equal(/*ENTER YOUR GUESS HERE*/);

	});

	it.skip('is an actual array, unlike arguments', () => {

		function resty(...args) {
			return args;
		}

		var rests = resty(1, 2, 3);

		expect(rests.splice).to.equal(Array.prototype.splice);
	});

});
