var shortestToChar = function(S, C) {
  let result = [];
  
  for (let i = 0; i < S.length; i++) {
    if (S[i] === C) {
      result[i] = 0;
      
      let p = i - 1, q = i + 1;
      while (p >= 0 && S[p] !== C) {
        if (!result[p]) {
          result[p] = result[p + 1] + 1;
        } else {
          result[p] = Math.min(result[p], result[p + 1] + 1)
        }
        
        p--;
      }
      
      while (q < S.length && S[q] !== C) {
        if (!result[q]) {
          result[q] = result[q - 1] + 1;
        } else {
          result[q] = Math.min(result[q], result[q - 1] + 1)
        }
        
        q++;
      }
    }
  }
  
  return result;
};