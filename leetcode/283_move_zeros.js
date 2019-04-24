const moveZeroes = function (nums) {
  let p = 0;
  let q = 1;
  while (p < nums.length && q < nums.length) {
    if (nums[p] === 0 && nums[q] === 0) {
      q++;
    } else if (nums[p] === 0) {
      [nums[p], nums[q]] = [nums[q], nums[p]];
      p++;
      q++;
    } else {
      p++;
      q++;
    }
  }

  return nums
};

console.log(moveZeroes([1,2,3]))
console.log(moveZeroes([0,1,0,3,12]))
console.log(moveZeroes([0,0,1,2]))