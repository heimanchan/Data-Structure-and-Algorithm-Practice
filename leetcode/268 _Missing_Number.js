const missingNumber = function(nums) {
  let sum = (1+nums.length) * nums.length / 2;
  
  for (let i = 0; i < nums.length; i++) {
    sum -= nums[i];
  }
  
  return sum;
};