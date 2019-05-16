function threeNumberSum(array, targetSum) {
  let sorted = array.sort((a, b) => a - b);
  let result = [];

  for (let i = 0; i < sorted.length; i++) {
    let p = i + 1;
    let q = sorted.length - 1;
    while (p < q) {
      let currSum = sorted[i] + sorted[p] + sorted[q];
      if (currSum === targetSum) {
        result.push([sorted[i], sorted[p], sorted[q]]);
        p++;
        q--;
      } else if (currSum < targetSum) {
        p++;
      } else if (currSum > targetSum) {
        q--;
      }
    }
  }

  return result;
}

console.log(threeNumberSum([12, 3, 1, 2, -6, 5, -8, 6], 0))
// => [[-8, 2, 6], [-8, 3, 5], [-6, 1, 5]];