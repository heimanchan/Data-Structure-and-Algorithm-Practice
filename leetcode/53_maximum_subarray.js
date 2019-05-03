const maxSubArray = function(nums) {
  let table = new Array(nums.length);
  table[0] = nums[0];
  
  for (let i = 1; i < nums.length; i++) {
    table[i] = Math.max(nums[i], nums[i] + table[i-1])
  }
  
  return Math.max(...table)
};