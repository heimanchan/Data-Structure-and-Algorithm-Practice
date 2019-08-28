var climbStairs = function(n) {
  let table = new Array(n+1);

  table[0] = 1;
  table[1] = 1;

  for (let i = 2; i <= n; i++) {
    table[i] = table[i - 2] + table[i - 1]
  }

  return table[n]
}

console.log(climbStairs(2))
console.log(climbStairs(3))
console.log(climbStairs(4))