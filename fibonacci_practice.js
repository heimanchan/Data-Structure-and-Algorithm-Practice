// return the n-th fib number
// simpleRecFib(1) => 1
// simpleRecFib(2) => 1
// simpleRecFib(3) => 2
// simpleRecFib(4) => 3
function simpleRecFib(num) {
  if (num < 1) return 0;
  if (num === 1 || num === 2) return 1;

  let sum = simpleRecFib(num - 2) + simpleRecFib(num - 1);
  return sum
}

// console.log(simpleRecFib(6)) // => 8
// console.log(simpleRecFib(12)) // => 144
// console.log(simpleRecFib(20)) // => 6765
// console.log(simpleRecFib(28)) // => 317811
// console.log(simpleRecFib(200)) // => STUCK!!!!

function simpleIterFib(num) {
  if (num < 1) return 0;
  if (num === 1 || num === 2) return 1;
  
  let first = 1;
  let second = 1;

  for (let i = 2; i < num; i++) {
    [first, second] = [second, first + second];
  }

  return second
}

// console.log(simpleIterFib(6)) // => 8
// console.log(simpleIterFib(12)) // => 144
// console.log(simpleIterFib(20)) // => 6765
// console.log(simpleIterFib(28)) // => 317811


function memoFib(num, memo = {}) {
  if (num < 1) return 0;
  if (num === 1 || num === 2) return 1;
  if (memo[num]) return memo[num]

  memo[1] = 1;
  memo[2] = 1;

  memo[num] = memoFib(num - 2, memo) + memoFib(num - 1, memo)

  return memo[num]
}

// console.log(memoFib(6)) // => 8
// console.log(memoFib(12)) // => 144
// console.log(memoFib(20)) // => 6765
// console.log(memoFib(28)) // => 317811
// console.log(memoFib(200)) // => 2.8057117299251016e+41


function tableFib(num) {
  if (num < 1) return 0;

  let table = new Array(num + 1);

  // First fib number starting from 0
  table[1] = 0;
  table[2] = 1;

  for (let i = 3; i <= num; i++) {
    table[i] = table[i - 2] + table[i - 1];
  }

  return table[num]
}

console.log(tableFib(4))
console.log(tableFib(6)) // => 8
console.log(tableFib(12)) // => 144
console.log(tableFib(20)) // => 6765
console.log(tableFib(28)) // => 317811
console.log(tableFib(200)) // => 2.8057117299251016e+41
