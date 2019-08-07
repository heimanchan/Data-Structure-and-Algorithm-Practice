var searchRange = function(nums, target) {
  let result = [-1, -1];
  let left = 0, right = nums.length - 1;
  
  while (left < right) {
    let mid = Math.floor((left + right) / 2);
    
    if (nums[mid] < target) {
      left = mid + 1;
     } else {
       right = mid;
     }
  }
  
  if (nums[left] === target) {
    result[0] = left;
  } else {
    return result;
  }
  
  right = nums.length - 1;
  while (left < right) {
    let mid = Math.floor((left + right) / 2) + 1;
    
    if (nums[mid] > target) {
      right = mid - 1;
    } else {
      left = mid;
    }
  }
  
  result[1] = left
  return result
};