var smallestRangeI = function(A, K) {
  let min = A[0], max = A[0];
  for (let x of A) {
      min = Math.min(min, x);
      max = Math.max(max, x);
  }
  return Math.max(0, max - min - 2*K);
};