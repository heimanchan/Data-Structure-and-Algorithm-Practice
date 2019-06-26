var fib = function(N) {
  let table = new Array(N+1)
  table[0] = 0;
  table[1] = 1;
  
  for (let i = 2; i < N; i++) {
    table[i] = table[i-1] + table[i-2];
  }
  
  return table[N]
};