const thirdMax = function(nums) {
  if (nums.length < 3) return Math.max(...nums)
  let first = second = third = -Infinity;
  
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === first || nums[i] === second || nums[i] === third) continue;
    if (nums[i] > first) {
      third = second;
      second = first;
      first = nums[i];
    } else if (first > nums[i] && nums[i] > second) {
      third = second;
      second = nums[i]
    } else if (second > nums[i] && nums[i] > third) {
      third = nums[i]
    }
  }

  return third !== -Infinity ? third : first;
};