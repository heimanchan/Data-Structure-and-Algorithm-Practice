const heightChecker = function(heights) {
  // Time: O(n)
  const numsArray = new Array(101).fill(0);
  let heightsIdx = result = 0;

  for (const height of heights) {
    numsArray[height]++;
  }

  for (let i = 1; i < numsArray.length; i++) {
    let numOccurrence = numsArray[i]
    for (let j = 0; j < numOccurrence; j++) {
      if (heights[heightsIdx++] !== i) result++;
    }
  }

  return result
  // Time: O(nlogn)
  // const sorted = Array.from(heights).sort((a, b) => (a-b))
  // let result = 0;
  
  // for (let i = 0; i < heights.length; i++) {
  //   if (sorted[i] !== heights[i]) result++;
  // }
  
  // return result;
};