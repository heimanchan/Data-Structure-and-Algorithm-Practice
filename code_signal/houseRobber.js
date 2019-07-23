function houseRobber(nums) {
  if (!nums.length) return 0;
  
  let prev = 0;
  let max = nums[0];
  
  for (let i = 1; i < nums.length; i++) {
    let temp = max;
    max = Math.max(prev + nums[i], max);
    prev = temp;
  }
  
  return max;
}
