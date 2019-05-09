const subarraySum = (nums, k) => {
  let map = {0: -1};
  let sum = 0;

  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];

    if (k !== 0) sum %= k;
    if (map.hasOwnProperty(sum)) {
      if (i - map[sum] > -1) return true;
    } else {
      map[sum] = i;
    }
  }

  return false;
}

console.log(subarraySum([23, 2, 4, 6, 7], 6)) // => True
console.log(subarraySum([1,0,0], 0)) // => True