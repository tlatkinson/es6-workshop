import {expect} from 'chai'

describe('Destructuring', () => {

	describe('with Objects', () => {

		it.skip('can be used to pull apart objects', () => {

			// Using destructuring, call `getAddress()` and create a 'city', 'state' and 'zip' variable.
			// var address = getAddress();
			// var city = address.city;
			// var state = address.state;
			// var zip = address.zip;


			expect(city).to.equal('Salt Lake City');
			expect(state).to.equal('UT');
			expect(zip).to.equal(84115);
		});

		it.skip('can alias destructured variables', () => {

			// Using destructuring, call `getAddress()` and pull the city, state and zip out, and alias them to c, s, z, respectively

			expect(c).to.equal('Salt Lake City');
			expect(s).to.equal('UT');
			expect(z).to.equal(84115);
			expect(()=>console.log(city)).to.throw();
			expect(()=>console.log(state)).to.throw();
			expect(()=>console.log(zip)).to.throw();

		});

		it.skip('can destructure nested variables', () => {

			// Using destructuring, call `getAddress()` and create an pull out the nested 'lat' and 'long' variables


			expect(lat).to.equal(40.776608);
			expect(long).to.equal(-111.920485);
			expect(()=> console.log(coords)).to.throw();

		});

	});

	describe('with Arrays', ()=> {

		it.skip('can be used to pull apart arrays', () => {

			// Call getNumbers and pull the first value out as `one` and the second as `two`


			expect(one).to.equal(1);
			expect(two).to.equal(2);

		});

		it.skip('can skip indexes in arrays', () => {

			// Call getNumbers and pull the first value out as `one` and the third as `three`. Don't pull out the second index. Skip it

			expect(one).to.equal(1);
			expect(three).to.equal(3);
			expect(()=>console.log(two)).to.throw();

		});

	});

})


function getAddress() {
	return {
		city: 'Salt Lake City',
		state: 'UT',
		zip: 84115,
		coords: {
			lat: 40.776608,
			long: -111.920485,
		},
	}
}

function getNumbers() {
	return [1, 2, 3, 4, 5, 6]
}

// MORE AT http://www.2ality.com/2015/01/es6-destructuring.html
