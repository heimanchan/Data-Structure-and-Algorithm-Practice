const maxDepth = str => {
  let depth = 0;
  let count = 0;
  let stack = [];

  if (!str.length) return 0;

  for (let i = 0; i < str.length; i++) {
    if (str[i] === "(") {
      stack.push(str[i]);
      count++;
    }

    if (str[i] === ")") {
      if (stack.pop() === "(") {
        if (count > depth) {
          depth = count;
          count = 0;
        } else {
          count = 0;
        }
      } else {
        return -1;
      }
    }
  }

  if (stack.length) return -1;
  return depth;
}

console.log(maxDepth("()"))
console.log(maxDepth("(()())"))
console.log(maxDepth("("))
console.log(maxDepth(")"))
console.log(maxDepth("()("))