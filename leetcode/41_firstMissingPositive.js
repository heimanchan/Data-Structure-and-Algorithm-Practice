const firstMissingPositive = function(nums) {
  let result = 1;
  let seen = new Set;
  
  for (const num of nums) {
    if (num > 0) seen.add(num)
  }
  
  while (seen.has(result)) {
    result++;
  }
  
  return result
};