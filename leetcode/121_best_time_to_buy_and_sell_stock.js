const maxProfit = function(prices) {
  if (prices.length < 1) return 0;
  
  let profit = [];
  let lowest = new Array(prices.length);
  
  lowest[0] = prices[0];
  profit[0] = 0;
  
  for (let i = 1; i < prices.length; i++) {
    lowest[i] = Math.min(prices[i], lowest[i-1]);
    profit[i] = Math.max(profit[i - 1], prices[i] - lowest[i-1])
  }
  
  console.log(profit)
  return profit[profit.length - 1]
};