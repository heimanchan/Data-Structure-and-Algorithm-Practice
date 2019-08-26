var findDuplicate = function (nums) {
  let left = 0, right = nums.length - 1;

  while (left < right) {
    let mid = Math.floor((left + right) / 2);
    let count = 0;

    for (let num of nums) {
      num <= mid ? count++ : null;
    }

    count <= mid ? left = mid + 1 : right = mid;
  }

  return left
};