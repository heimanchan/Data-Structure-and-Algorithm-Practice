// Note: Write a solution that only iterates over the string once and uses O(1) additional memory, since this is what you would be asked to do during a real interview.

// Given a string s consisting of small English letters, find and return the first instance of a non - repeating character in it.If there is no such character, return '_'.

//   Example

// For s = "abacabad", the output should be
// firstNotRepeatingCharacter(s) = 'c'.

// There are 2 non - repeating characters in the string: 'c' and 'd'.Return c since it appears in the string first.

// For s = "abacabaabacaba", the output should be
// firstNotRepeatingCharacter(s) = '_'.

// There are no characters in this string that do not repeat.

function firstNotRepeatingCharacter(s) {
  let l = new Array(26).fill(0);

  for (let i = 0; i < s.length; i++) {
    console.log(s[i].charCodeAt() - 97)
    l[s[i].charCodeAt() - 97] += 1;
  }
  console.log(l)
  for (let j = 0; j < s.length; j++) {
    if (l[s[j].charCodeAt() - 97] === 1) return s[j];
  }

  return "_"
}

console.log(firstNotRepeatingCharacter("abacabad"))
console.log(firstNotRepeatingCharacter("abacabaabacaba"))
console.log(firstNotRepeatingCharacter("z"))
console.log(firstNotRepeatingCharacter("bcb"))
console.log(firstNotRepeatingCharacter("abcdefghijklmnopqrstuvwxyziflskecznslkjfabe"))
console.log(firstNotRepeatingCharacter("zzz"))