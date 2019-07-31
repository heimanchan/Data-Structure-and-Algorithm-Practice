var isPalindrome = function(x) {
  let num = x.toString();
  let p = 0;
  let q = num.length - 1;
  
  while (p < q) {
    if (num[p] !== num[q]) {
      return false;
    }
    
    p++;
    q--;
  }
  
  return true;
};