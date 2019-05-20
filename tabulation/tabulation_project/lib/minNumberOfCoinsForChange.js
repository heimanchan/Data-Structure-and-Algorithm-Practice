function minNumberOfCoinsForChange(n, denoms) {
	let table = new Array(n+1).fill(Infinity);
	table[0] = 0;
	
	denoms.forEach(denom => {
		for (let i = 0; i < table.length; i++) {
			for (let qty = 0; qty * denom <= i; qty++) {
				let reminder = i - qty * denom;
				let attempt = table[reminder] + qty;
				if (attempt < table[i]) table[i] = attempt;
			}
		}
	})
	
	return table[n] !== Infinity ? table[n] : -1;
}