'use strict'

function factorial(n) {
	let result = 1;
	for (let j = 2; j <= n; j++) {
		result *= j;
	}
	return result;
}

const assert = require('assert');
assert.equal(factorial(1), 1, `1の階乗は１で実際は${factorial(1)}です`);
assert.equal(factorial(3), 6, `3の階乗は６で実際は${factorial(3)}です`);
assert.equal(factorial(10), 3628800, `10の階乗は3628800で実際は${factorial(10)}です`);

console.log("すべてのテストを通過いたしました");

