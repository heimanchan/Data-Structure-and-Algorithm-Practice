function rollTheString(s, roll) {
  // Write your code here
  let timesToRoll = new Array(s.length).fill(0);

  for (let val of roll) {
    for (let i = 0; i < val; i++) {
      timesToRoll[i]++;
    }
  }

  let str = s.split("")
  for (let i = 0; i < timesToRoll.length; i++) {
    str = rollChar(str, i, timesToRoll[i])
  }

  return str.join("")
}

function rollChar(str, idx, val) {
  let alphabet = [..."abcdefghijklmnopqrstuvwxyz"]

  let i = alphabet.indexOf(str[idx]);
  let nextIdx = ((i + val) % 26);
  str[idx] = alphabet[nextIdx];

  return str
}