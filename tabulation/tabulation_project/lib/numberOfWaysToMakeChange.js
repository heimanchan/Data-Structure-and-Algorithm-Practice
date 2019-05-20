function numberOfWaysToMakeChange(n, denoms) {
	let table = new Array(n+1).fill(0);
	
	table[0] = 1;
	
	denoms.forEach(denom => {
		for (let i = 1; i < n+1; i++) {
			if (denom <= i) {
				table[i] += table[i-denom]
			}
		}
	})
	
	console.log(table)
	return table[n];
}