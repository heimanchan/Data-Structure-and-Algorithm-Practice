const maxProfit = function (prices) {
  if (!prices.length) return 0;

  const profits = new Array(prices.length);
  const lowest = new Array(prices.length);
  profits[0] = 0;
  lowest[0] = prices[0];

  for (let i = 1; i < prices.length; i++) {
    lowest[i] = Math.min(lowest[i - 1], prices[i]);
    profits[i] = Math.max(prices[i] - lowest[i], profits[i - 1])
  }

  return profits[profits.length - 1]
};