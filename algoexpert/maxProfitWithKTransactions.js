function maxProfitWithKTransactions(prices, k) {
	if (!prices.length) return 0
	const profits = [];
	
	for (let i = 0; i < k+1; i++) {
		let row = new Array(prices.length).fill(0);
		profits.push(row);
	}
	
	for (let t = 1; t < k + 1; t++) {
		let currMaxProfit = -Infinity
		for (let d = 1; d < prices.length; d++) {
			currMaxProfit = Math.max(currMaxProfit, profits[t-1][d-1] - prices[d-1])
			profits[t][d] = Math.max(profits[t][d-1], currMaxProfit + prices[d])
		}
	}
	
	return profits[k][prices.length - 1]
}