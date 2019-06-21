const maxProfit = function(prices) {
  if (!prices.length) return 0
  const profits = [];
  
  for (let i = 0; i <= 2; i++) {
    let row = new Array(prices.length).fill(0);
    profits.push(row);
  }
  
  for (let t = 1; t <= 2; t++) {
    let maxSoFar = -Infinity
    for (let d = 1; d < prices.length; d++) {
      //profit offset new cost = profit of first trans - cost of new price
      maxSoFar = Math.max(maxSoFar, profits[t-1][d-1] - prices[d-1])
      // new profit = either previous max or profit offset new cost + new price
      profits[t][d] = Math.max(profits[t][d-1], maxSoFar + prices[d])
    }
  }
  
  return profits[2][prices.length - 1]
};