// slow, lots of stack frames everytime the function is called
// O(2^n)
function fib(n) {
  if (n === 1 || n === 2) return 1;

  return fib(n - 1) + fib(n - 2);
}

// Results are stored in the memo hash table
// fastFib(60) => Lookup memo[59] + memo[58]
// O(n)
function fastFib(n, memo = {}) {
  if (memo[n]) return memo[n];
  if (n === 1 || n === 2) return 1;

  memo[n] = fastFib(n - 1, memo) + fastFib(n - 2, memo);
  return memo[n];
}

console.log(fastFib(1000));