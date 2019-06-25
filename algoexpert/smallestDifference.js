// Find the pair from two input arrays that makes the smallest difference closest to zero
// First element from array1 and second element from array2
// Assume there is only one pair

function smallestDifference(arrayOne, arrayTwo) {
  const sortedOne = Array.from(arrayOne).sort((a, b) => a - b)
  const sortedTwo = Array.from(arrayTwo).sort((a, b) => a - b)
  let p = 0, q = 0;
  let minDiff = Infinity;
  let result = [];

  while (p < sortedOne.length && q < sortedTwo.length) {
    let absDiff = Math.abs(sortedOne[p] - sortedTwo[q]);

    if (absDiff < minDiff) {
      result = [sortedOne[p], sortedTwo[q]]
      minDiff = absDiff;
    }

    if (sortedOne[p] > sortedTwo[q]) {
      q++;
    } else if (sortedOne[p] < sortedTwo[q]) {
      p++;
    } else {
      return result
    }
  }

  return result;
}

console.log(smallestDifference([-1,5,10,20,28,3], [26,134,135,17,15])) //=> [28,26]