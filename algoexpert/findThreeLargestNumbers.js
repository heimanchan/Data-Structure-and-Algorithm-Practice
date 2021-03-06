function findThreeLargestNumbers(array) {
	let result = new Array(3);
	for (const num of array) {
		updateLargest(result, num)
	}
	return result;
}

function updateLargest(threeLargest, num) {
	if (!threeLargest[2] || num > threeLargest[2]) {
		shift(threeLargest, num, 2)
	} else if (!threeLargest[1] || num > threeLargest[1]) {
		shift(threeLargest, num, 1)
	} else if (!threeLargest[0] || num > threeLargest[0]) {
		shift(threeLargest, num, 0)
	}
} 

function shift(array, num, idx) {
	for (let i = 0; i <= idx; i++) {
		if (i === idx) {
			array[i] = num;
		} else {
			array[i] = array[i+1];
		}
	}
}

console.log(findThreeLargestNumbers([1,2,3,4,5,6]))
// => [4,5,6]

console.log(findThreeLargestNumbers([5,1,6,6,2,4,3]))
// => [5,6,6]