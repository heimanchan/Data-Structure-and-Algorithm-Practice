function maxSubsetSumNoAdjacent(array) {
	if (array.length < 1) return 0;
	if (array.length === 1) return array[0];
	let second = array[0]
	let first = Math.max(array[1], array[0]);
	
	for (let i = 2; i < array.length; i++) {
		let currMax = Math.max(first, second+array[i]);
													 
		second = first;
		first = currMax;
	}
	
	return first;
}
