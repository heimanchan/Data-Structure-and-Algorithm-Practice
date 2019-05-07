const findMaxAverage = function(nums, k) {
  let sum = 0;
  
  for (let i = 0; i < k; i++) {
    sum += nums[i];
  }
  
  let result = sum;
  
  for (let i = k; i < nums.length; i++) {
    sum += nums[i] - nums[i - k];
    result = Math.max(result, sum)
  }
  
  return result / k;
};