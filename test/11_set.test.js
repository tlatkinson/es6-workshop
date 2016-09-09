import {expect} from 'chai'

describe('SETS', () => {

	it.skip('has an add method and a has method', ()=> {

		// Create a new Set called 'mySet'
		// add the numbers 1, 2, and 3 to the set
		// NOTE confirm size if adding duplicate

		expect(mySet.has(1)).to.be.true;
		expect(mySet.has(2)).to.be.true;
		expect(mySet.size).to.equal(2);
		expect(mySet.has(3)).to.equal(false)

	});

});
