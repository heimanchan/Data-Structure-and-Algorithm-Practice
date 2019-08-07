var findMin = function(nums) {
  if (nums[0] < nums[nums.length - 1]) return nums[0]
  let left = 0;
  let right = nums.length - 1;
  let first = nums[0];
  
  while (left < right) {
    let mid1 = Math.floor((left + right) / 2);
    let mid2 = mid1 + 1;
    
    if (nums[mid1] > nums[mid2]) {
      return nums[mid2];
    } else {
      if (nums[mid1] > first) {
        left = mid1;
      } else {
        right = mid1;
      }
    }
  }
  
  return nums[left]
};