function maxLengthSubarray(nums) {
  if (!nums.length) return 0;

  let curr = 1;
  let maxLen = 1;
  let asc = new Array(nums.length).fill(1);
  let des = new Array(nums.length).fill(1);

  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i+1] > nums[i]) {
      asc[i+1] = asc[i] + 1;
    }
  }

  for (let i = nums.length - 1; i > 0; i--) {
    if (nums[i-1] < nums[i]) {
      des[i-1] = des[i] + 1
    }
  }

  for (let i = 0; i < nums.length; i++) {
    if (asc[i-1]) curr += asc[i-1];
    if (des[i+1]) curr += des[i+1];

    if (curr > maxLen) {
      maxLen = curr;
    }

    curr = 1;
  }
  return maxLen;
}

console.log(maxLengthSubarray([1,2,3,1,2]))
console.log(maxLengthSubarray([22,87,74,75,203]))
console.log(maxLengthSubarray([22,87,74,75,1,203]))
console.log(maxLengthSubarray([1]))
console.log(maxLengthSubarray([]))