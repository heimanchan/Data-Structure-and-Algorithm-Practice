const countBits = function(num) {
  if (num === 0) return [0];
  
  let table = new Array(num+1);
  let currPower = 2;
  let lastPower = 1;
  table[0] = 0;
  table[1] = 1;
  
  for (let i = 2; i <= num; i++) {
    if (i === currPower) {
      table[i] = 1;
      lastPower = currPower;
      currPower *= 2
    } else {
      table[i] = table[lastPower] + table[i - lastPower]
    }
  }
  
  return table;
};

console.log(countBits(5))