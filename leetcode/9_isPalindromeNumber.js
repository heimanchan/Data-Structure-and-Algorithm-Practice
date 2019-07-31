var isPalindrome = function(x) {
  // let num = x.toString();
  // let p = 0;
  // let q = num.length - 1;
  
  // while (p < q) {
  //   if (num[p] !== num[q]) {
  //     return false;
  //   }
    
  //   p++;
  //   q--;
  // }
  
  // return true;

  // No converting to string solution
  var isPalindrome = function (x) {
    if (x < 0 || (x % 10 === 0 && x !== 0)) return false;

    let revertNum = 0;
    while (x > revertNum) {
      revertNum = revertNum * 10 + x % 10;
      x = Math.floor(x / 10);
    }

    return x === revertNum || x === Math.floor(revertNum / 10)
  };
};