const isHappy = function(n) {
  let slow = fast = n;
  
  do {
    slow = getSum(slow);
    fast = getSum(getSum(fast));
  } while (slow !== fast);
  
  return slow === 1;
  
  function getSum(num) {
    let sum = 0;
    let temp;
    
    while (num > 0) {
      temp = num % 10;
      sum += Math.pow(temp, 2);
      num = Math.floor(num/10);
    }
    
    return sum;
  }
};