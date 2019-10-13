var fairCandySwap = function(A, B) {
  let sumA = A.reduce((acc, num) => acc + num);
  let sumB = B.reduce((acc, num) => acc + num);
  let average = (sumA + sumB) / 2;
  
  let setB = new Set(B);
  
  for(let i = 0; i < A.length; i++) {
    let curr = A[i];
    let midNum = sumA - curr;
    let target = average - midNum;
    
    if (setB.has(target) && sumB - target + curr === average) {
      return [curr, target]
    }
  }
};