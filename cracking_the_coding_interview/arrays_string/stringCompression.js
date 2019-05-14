const stringCompression = str => {
  let result = "";
  let count = 1;

  for (let i = 0; i < str.length - 1; i++) {
    if (str[i] === str[i+1]) {
      count++;
    } else {
      result += `${str[i]}${count}`;
      count = 1;
    }

    if (i === str.length - 2) {
      result += `${str[i+1]}${count}`;
    }
  }
  
  return result;
}

console.log(stringCompression("aabcccccaaa"))
console.log(stringCompression("aabcccccaab"))
console.log(stringCompression("abbcccdddde"))