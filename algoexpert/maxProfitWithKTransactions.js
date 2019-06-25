function maxProfitWithKTransactions(prices, k) {
  if (!prices.length) return 0;
  const profits = [];

  for (let i = 0; i < k + 1; i++) {
    let row = new Array(prices.length).fill(0);
    profits.push(row)
  }

  for (let t = 1; t < k + 1; t++) {
    let profitSoFar = -Infinity
    for (let d = 1; d < prices.length; d++) {
      profitSoFar = Math.max(profitSoFar, profits[t - 1][d - 1] - prices[d - 1])
      profits[t][d] = Math.max(profits[t][d - 1], profitSoFar + prices[d])
    }
  }

  return profits[k][prices.length - 1]
}