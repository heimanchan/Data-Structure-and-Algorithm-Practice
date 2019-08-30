var minCostClimbingStairs = function(cost) {
  let table = new Array(cost.length)
  table[0] = cost[0]
  table[1] = cost[1]
  
  for (let i = 2; i < cost.length; i++) {
    table[i] = cost[i] + Math.min(table[i - 2], table[i - 1]);
  }
  
  return Math.min(table[table.length - 2], table[table.length - 1]);
};