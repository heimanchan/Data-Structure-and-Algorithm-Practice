const threeSum = function(nums) {
  let result = [];
  let sorted = nums.sort((a, b) => (a - b));
  
  for (let i = 0 ; i < sorted.length; i++) {
    if (sorted[i] === sorted[i-1]) continue;
    let p = i+1;
    let q = sorted.length - 1;
    
    while (p < q) {
      let currSum = sorted[i] + sorted[p] + sorted[q];
      
      if (currSum === 0) {
        result.push([sorted[i], sorted[p], sorted[q]]);
        p++;
        q--;
        
        while (sorted[p] === sorted[p-1]) p++;
        while (sorted[q] === sorted[q+1]) q--;
        
      } else if (currSum < 0) {
        p++;
      } else if (currSum > 0) {
        q--;
      }
    }
  }
  
  return result;
};