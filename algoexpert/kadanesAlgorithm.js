function kadanesAlgorithm(array) {
	if (!array.length) return 0;
	
	let table = new Array(array.length);
	let max = array[0];
	let cur = array[0];
	// table[0] = array[0];
	
	for (let i = 1; i < table.length; i++) {
		// table[i] = Math.max(array[i], array[i] + table[i-1]);
		cur = Math.max(array[i], array[i] + cur);
		max = Math.max(cur, max);
	}

	// return Math.max(...table)
	return max;
}