var findPeakElement = function(nums) {
  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    let mid1 = Math.floor((left + right) / 2);
    let mid2 = mid + 1;

    if (nums[mid1] < nums[mid2]) {
      left = mid2;
    } else {
      right = mid1;
    }
  }

  return left;
};