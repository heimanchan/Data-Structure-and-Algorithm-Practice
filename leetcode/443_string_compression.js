const compress = function(chars) {

  let start = 0, i = 0;
  while (i < chars.length) {
    let count = 0;
    let ch = chars[i];
    while (chars[i] === ch) {
      i++;
      count++;
    }
    
    chars[start++] = ch;
    if (count !== 1) {
      for (let amt of count.toString()) {
        chars[start++] = amt
      }
    }
  }
  
  return start
};