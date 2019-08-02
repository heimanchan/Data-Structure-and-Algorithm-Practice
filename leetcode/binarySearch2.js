function binarySearch2(nums, target) {
  if (!nums.length) return -1;

  let left = 0, right = nums.length;

  while (left < right) {
    let mid = Math.floor((left+right) / 2);

    if (nums[mid] === target) {
      return mid;
    } else if (nums[mid] < target) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }

  if (left !== nums.length && nums[left] === target) return left;
  return -1;
}

console.log(binarySearch2([1,2,3,4,5,6], 3))