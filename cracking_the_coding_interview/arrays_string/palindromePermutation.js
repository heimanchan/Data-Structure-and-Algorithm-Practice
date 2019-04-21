const isPalindromPermutation = str => {
  let count = {};
  let oddCount = 0;

  let myStr = str.toLowerCase().replace(/[^a-zA-Z]+/g, '');
  for (let i = 0; i < myStr.length; i++) {
    count[myStr[i]] = count[myStr[i]] + 1 || 1;
  }

  for (let key in count) {
    if (count[key] % 2 !== 0) oddCount++;
    if (oddCount > 1) return false;
  }

  return true
}

console.log(isPalindromPermutation("Tact Coa"))
console.log(isPalindromPermutation("ababc"))