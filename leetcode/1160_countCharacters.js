var countCharacters = function(words, chars) {
  let count = {};
  let result = 0;
  
  for (let ch of chars) {
    count[ch] = (count[ch] || 0) + 1;
  }
  
  for (let word of words) {
    let countCopy = Object.assign({}, count);
    let fail = false;
    
    for (let ch of word) {
      if (!countCopy[ch] || countCopy[ch] < 1) {
        fail = true;
        break;
      } else {
        countCopy[ch] -= 1;
      }
    }
    
    if (!fail) result += word.length;
  }
  
  return result;
};