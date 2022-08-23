/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
  const letterMap = {
    0: " ",
    1: "",
    2: "abc",
    3: "def",
    4: "ghi",
    5: "jkl",
    6: "mno",
    7: "pqrs",
    8: "tuv",
    9: "wxyz",
  };
  let ans = [];
  let word = [];

  if (digits.length) {
    dfs(0);
  } else {
    return [];
  }

  function dfs(index) {
    if (index === digits.length) return ans.push(word.join(""));

    let letters = letterMap[digits[index]];

    for (let i = 0; i < letters.length; i++) {
      word.push(letters[i]);
      dfs(index + 1);
      word.pop();
    }
  }

  return ans;
};
