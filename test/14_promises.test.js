import {expect} from 'chai'

describe(`Promises`, () => {
	it.skip(`should resolve`, () => {
		pickApple('ripe')
			.then((result) => {
				console.log('yay');
			}, (result) => {
				console.log('boo');
			})
			.catch((error) => {
				console.log('womp womp');
			})
	});

	function pickApple(ripeness) {
		// Immediately return a promise which will eventually get resolved
		// or rejected by calling the corresponding function.
		return new Promise((resolve, reject) => {
			// Do something asynchonous. Could be AJAX, using a timeout here.
			setTimeout(() => {
				if (ripeness === 'ripe') {
					resolve('ripe apple')
				} else if (ripeness === 'unripe') {
					reject('unripe apple')
				} else {
					reject(new Error('out of apples'))
				}
			}, 100)
		})
	}
})
