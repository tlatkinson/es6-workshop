import {expect} from 'chai'

//TODO more array API katas

describe(`String`, () => {
	it.skip(`should be easier to determine whether a string includes another`, () => {
		const sentence = 'It was the best of times. It was the worst of times';
		// create a variable called `result` that is assigned to a call of sentence.includes
		expect(result).to.be.true;
	});
});

describe(`Array`, () => {
	it.skip(`should be able to take an array-like object and convert it into an array`, () => {
		var obj = {length: 3, 0: 'a', 1: 'b', 2: 'c'};
		// this is even more handy with a NodeList like that returned from document.querySelector
		// create a variable called `result` and assign it to a call to Array.from
		expect(result).to.deep.equal(['a', 'b', 'c']);
	});

	it.skip(`can find an index and data point`, () => {
		var arr = ['a', 'b', 'c'];

		expect(1).to.equal(arr.findIndex());
		expect('b').to.equal(arr.find());
	});
});

describe(`Object`, () => {
	it.skip(`should be easy to copy properties from one object to another`, () => {
		const source1 = {
			a: {
				b: 'c',
				m: [1, 2, 3],
			},
		};
		const source2 = {
			d: false,
			z: 34,
		};
		const source3 = {
			z: 42,
			p: ['a', 'b', 'c'],
		};

		const target = {
			a: {
				q: 'r',
				m: [4, 5, 6],
				s: {
					t: 3,
				},
			},
			d: true,
			p: ['x', 'y', 'z'],
		};

		// merge the sources into the target using Object.assign and assign the result to `result`
		//NOTE this replaces jQuery.extend

		expect(result).to.deep.equal({
			a: {
				b: 'c',
				m: [1, 2, 3],
			},
			d: false,
			z: 42,
			p: ['a', 'b', 'c'],
		});
	});
});
