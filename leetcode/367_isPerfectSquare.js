var isPerfectSquare = function(num) {
  let left = 1, right = num;
  
  while (left <= right) {
    let mid  = Math.floor((left + right) / 2);
    let pow = mid * mid;
    
    if (pow === num) {
      return true;
    } else if (pow > num) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  
  return false;
};
