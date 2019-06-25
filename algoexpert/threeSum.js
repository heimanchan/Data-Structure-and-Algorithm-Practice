// Find all numbers in the input array that sum up to the target

function threeNumberSum(array, targetSum) {
  const sorted = Array.from(array).sort((a, b) => a - b);
  const result = [];

  for (let i = 0; i < sorted.length; i++) {
    let p = i + 1, q = sorted.length - 1;

    while (p < q) {
      let currSum = sorted[i] + sorted[p] + sorted[q]
      if (currSum > targetSum) {
        q--;
      } else if (currSum < targetSum) {
        p++
      } else {
        result.push([sorted[i], sorted[p], sorted[q]])
        p++;
        q--;
      }
    }
  }

  return result;
}

console.log(threeNumberSum([12, 3, 1, 2, -6, 5, -8, 6], 0))
// => [[-8, 2, 6], [-8, 3, 5], [-6, 1, 5]];