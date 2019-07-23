function climbingStairs(n) {
  // index of table is the number of steps (n)
  let table = new Array(n+1);
  table[0] = 1; // if 0 steps, only 1 way
  table[1] = 1; // if 1 step, only 1 way

  // starting from 2 steps, number of ways is either
  // 1 step from (n-1) or 2 steps from (n-2)
  // i.e. n = n-1 + n-2
  
  for (let i = 2; i <= n; i++) {
    table[i] = table[i-1] + table[i-2];
  }
  
  return table[n];
}
