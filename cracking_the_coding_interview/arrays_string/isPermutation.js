// assume "God" is permutation of "dog"

// O(N log N) approach
// function isPermutation(str1, str2) {
//   str1 = str1.toLowerCase().split("").sort().join("");
//   str2 = str2.toLowerCase().split("").sort().join("");

//   return str1 === str2;
// }

// O(N) approach
function isPermutation(str1, str2) {
  if (str1.length !== str2.length) return false;
  let count = {};
  str1 = str1.toLowerCase();
  str2 = str2.toLowerCase();

  for (let i = 0; i < str1.length; i++) {
    if (count[str1[i]]) {
      count[str1[i]]++;
    } else {
      count[str1[i]] = 1;
    }
  }

  for (let j = 0; j < str2.length; j++) {
    if (!(str2[j] in count)) {
      return false;
    } else if (--count[str2[j]] < 0) {
      return false;
    }
  }

  return true;
}

console.log(isPermutation("anagram", "nagaram"))
console.log(isPermutation("ab", "a"))
console.log(isPermutation("GOD", "dog"))
console.log(isPermutation("GOD", "dof"))
console.log(isPermutation("aab", "bba"))
console.log(isPermutation("abcdefg", "FgAbcDe"))
console.log(isPermutation("a", "A"))
console.log(isPermutation("a", "b"))
console.log(isPermutation("", ""))