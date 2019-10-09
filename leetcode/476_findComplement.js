var findComplement = function(num) {
  let i = 0, j = 0;
  
  while (i < num) {
    i += Math.pow(2, j)
    j++;
  }
  
  return i - num
};