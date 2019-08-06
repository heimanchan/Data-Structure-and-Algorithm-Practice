var findPeakElement = function(nums) {
  let left = 0, right = nums.length - 1;
  
  while (left < right) {
    let mid1 = Math.floor((left+right) / 2);
    let mid2 = mid1 + 1;
    
    if (nums[mid1] < nums[mid2]) {
      left = mid2;
    } else {
      right = mid1;
    }
  }
  
  return left;
};