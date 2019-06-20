const heightChecker = function(heights) {
  const sorted = Array.from(heights).sort((a, b) => (a-b))
  let result = 0;
  
  for (let i = 0; i < heights.length; i++) {
    if (sorted[i] !== heights[i]) result++;
  }
  
  return result;
};