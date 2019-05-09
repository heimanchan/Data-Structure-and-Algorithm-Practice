const rob = function(nums) {
  if (!nums.length) return 0;
  let curr = 0;
  let prev = 0;
  
  for (let i = 0; i < nums.length; i++) {
    let temp = curr;
    curr = Math.max(prev + nums[i], curr);
    prev = temp;
  }
  
  return curr;
};