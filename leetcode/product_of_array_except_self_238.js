// Given an array nums of n integers where n > 1,  return an array output such that output[i] is equal to the product of all the elements of nums except nums[i].

//   Example:

// Input: [1, 2, 3, 4]
// Output: [24, 12, 8, 6]
// Note: Please solve it without division and in O(n).

let productExceptSelf = function (nums) {
  let result = new Array(nums.length).fill(1);
  let prod = 1;

  for (let i = 0; i < nums.length; i++) {
    result[i] *= prod;
    prod *= nums[i]
  }

  prod = 1

  for (let j = nums.length - 1; j >= 0; j--) {
    result[j] *= prod;
    prod *= nums[j]
  }

  return result
};