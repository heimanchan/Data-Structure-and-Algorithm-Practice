function minNumberOfJumps(array) {
  let table = new Array(array.length).fill(Infinity);
	table[0] = 0;
	
	for (let i = 0; i < array.length; i++) {
		for (let j = 1; j <= array[i]; j++) {
			if (i + j < array.length) {
				table[i + j] = Math.min(table[i] + 1, table[i + j]);
			}
		}
	}
	
	return table[table.length - 1]
}