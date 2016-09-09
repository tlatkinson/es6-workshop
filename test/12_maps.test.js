import {expect} from 'chai'

describe('MAPS', () => {

	it.skip('has a set method', ()=> {

		// Create a new map called 'myMap'
		// add a new entry. Use 'name' as the key and 'Aaron' as the value

		expect(myMap.get('name')).to.equal('Aaron');
		expect(myMap.has('name')).to.equal(true);

	});

	it.skip(`doesn't coerce keys`, ()=> {

		let myMap = new Map();
		myMap.set(1, 'Aaron');
		expect(myMap.get('1')).to.equal(/*ENTER YOUR GUESS HERE*/);
		myMap.set('1', 'Aaron');
		expect(myMap.get('1')).to.equal(/*ENTER YOUR GUESS HERE*/);

	});

	it.skip(`has an entry set`, ()=> {

		var myMap = new Map();
		myMap.set("0", "foo");
		myMap.set(1, "bar");
		myMap.set({}, "baz");

		var mapIter = myMap.entries();

		Array.from(myMap.entries()).forEach(entry => console.log(entry.value));

		console.log(mapIter.next().value); // ["0", "foo"]
		console.log(mapIter.next().value); // [1, "bar"]
		console.log(mapIter.next().value); // [Object, "baz"]
	});

});
