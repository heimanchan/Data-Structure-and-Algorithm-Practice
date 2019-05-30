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

console.log(simpleIterFib(6)) // => 8
console.log(simpleIterFib(12)) // => 144
console.log(simpleIterFib(20)) // => 6765
console.log(simpleIterFib(28)) // => 317811