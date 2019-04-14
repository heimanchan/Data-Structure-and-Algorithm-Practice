// Work through this problem on https://leetcode.com/problems/coin-change-2/ and use the specs given there.
// Feel free to use this file for scratch work.

let change = function (amount, coins, memo = {}) {
  let key = amount + '-' + coins;
  if (key in memo) return memo[key];
  if (amount === 0) return 1;

  let currCoin = coins[coins.length - 1];
  let count = 0;

  for (let i = 0; currCoin * i <= amount; i++) {
    count += change(amount - currCoin * i, coins.slice(0,-1), memo);
  }

  memo[key] = count;
  return memo[key]
};