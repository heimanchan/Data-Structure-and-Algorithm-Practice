var majorityElement = function(nums) {
  let counts = {};
  let majority = Math.floor(nums.length / 2);
  
  for (let num of nums) {
    counts[num] = (counts[num] || 0) + 1;
    
    if (counts[num] > majority) return num;
  }
  
};