const findSubsequences = function (nums) {
  if (!nums.length) return [];

  let result = [];
  let current = [];
  let seen = new Set;

  function dfsHelper(nums, idx, current, result, seen) {
    if (current.length > 1 && !seen.has(current + "")) {
      seen.add(current + "");
      result.push(current.concat([]));
    }

    for (let i = idx; i < nums.length; i++) {
      if (current.length === 0 || current[current.length - 1] <= nums[i]) {
        current.push(nums[i]);
        dfsHelper(nums, i + 1, current, result, seen);
        current.pop();
      }
    }
  }
  
  dfsHelper(nums, 0, current, result, seen)
  return result;
};

console.log(findSubsequences([4, 6, 7, 7]))