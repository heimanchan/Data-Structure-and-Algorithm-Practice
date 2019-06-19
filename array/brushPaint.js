function brushPaint(A) {
  if (!A.length) return 0;
  let result = A[0];

  for (let i = 1; i < A.length; i++) {
    const diff = A[i] - A[i-1];
    if (diff > 0) result += diff;
  }

  return result;
}

console.log(brushPaint([1,3,2,1,2,1,5,3,3,4,2])) // => 9
console.log(brushPaint([5,8])) // => 8