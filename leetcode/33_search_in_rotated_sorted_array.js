var search = function(nums, target) {
  if (!nums.length) return -1;

  let head = 0;
  let tail = nums.length - 1;
  
  while (head <= tail) {
    let mid = Math.floor((head + tail) / 2);
    
    if (nums[mid] === target) {
      return mid;
    } else if ((nums[head] <= target && target < nums[mid]) ||
               (nums[head] > nums[mid] && (nums[head] <= target || target < nums[mid]))) {
      tail = mid - 1;
    } else {
      head = mid + 1;
    }
  }
  
  return -1;
};