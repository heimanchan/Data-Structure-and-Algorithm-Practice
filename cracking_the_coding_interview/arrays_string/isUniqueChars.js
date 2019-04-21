// No additional data structure

function isUniqueChars(str) {
  let letters = [];

  for (let i = 0; i < str.length; i++) {
    if (letters[str[i]]) {
      return false;
    } else {
      letters[str[i]] = true;
    }

    console.log(letters)
  }

  return true;
}

console.log(isUniqueChars("abcdefghijklmnopqrstuvwxyz"))
console.log(isUniqueChars("abcda"))
console.log(isUniqueChars("abbcde"))