import {expect} from 'chai'

describe('Arrow Functions', () => {

	it.skip('can replace traditional functions', () => {

		let fnMultiply, arrowMultiply;

		// Write arrowMultiply
		// For 'arrowMultiply', set it equal to an arrow function

		fnMultiply = function(a, b) {
			return a * b
		};

		expect(fnMultiply(5, 5)).to.equal(arrowMultiply(5, 5));

	});

	it.skip('can replace traditional functions #2', () => {

		let nums = [2, 5, 10];

		// Replace the 'function' in this 'map' call with an arrow function.
		// Hint: you shouldn't have any braces or 'return' after you are done
		let squares = nums.map(function (num) {
			return num * num
		});

		expect(squares.shift()).to.equal(4);
		expect(squares.shift()).to.equal(25);
		expect(squares.shift()).to.equal(100);

	});

	it.skip('binds `this` to the eval scope, not the runtime scope', () => {

		// Change the person object. One of the functions should become an arrow to allow for 'this' to retain context correctly
		//NOTE: very significant for event listeners

		let person = {
			name: 'Aaron',
			greetFriends: function (friends) {
				friends.forEach(function (friend) {
					console.log(this.name + ' greets to ' + friend)
				})
			},
		};

		let friendsArray = ['Naomi', 'Jojo', 'Ryan', 'Owen'];

		expect(()=> person.greetFriends(friendsArray)).not.to.throw()

	});

	it.skip('can make array filter chains more managable', () => {

		let data = [
			{type: 'Widget', name: 'Sprocket', price: 10.00, qty: 3},
			{type: 'Widget', name: 'Bracket', price: 1.00, qty: 5},
			{type: 'Widget', name: 'Brace', price: 2.50, qty: 1},
			{type: 'Widget', name: 'Sprocket', price: 4.00, qty: 2},
			{type: 'Food', name: 'Gouda', price: 8.75, qty: 4},
			{type: 'Food', name: 'Bacon', price: 3.50, qty: 3},
			{type: 'CD', name: 'Queen Best Hits', price: 5.50, qty: 5},
			{type: 'CD', name: 'Brittney Best Hits', price: 6.25, qty: 3},
			{type: 'CD', name: 'JT Best Hits', price: 2.25, qty: 6},
		];

		// REPLACE ALL REGULAR FUNCTION WITH ARROW FUNCTIONS

		let shoppingList = data
			.filter(function (d) {
				return d.type != 'Widget';
			}) // Remove Widgets
			.filter(function (d) {
				return d.price < 5;
			}) // Find only remaining items with price < 5
			.sort(function (d) {
				return d.qty * -1;
			}) // Sort by price, desc
			.map(function (d) {
				return d.name;
			})// Pull just the name from each item

		expect(shoppingList.shift()).to.equal('Bacon');
		expect(shoppingList.shift()).to.equal('JT Best Hits');

	});

});
