var distributeCandies = function(candies) {
  let set = new Set(candies);
  
  return Math.min(set.size, candies.length / 2)
};