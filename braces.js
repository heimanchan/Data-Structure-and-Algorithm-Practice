function braces(arr) {
  let braces = { 
    "(" : ")",
    "{" : "}",
    "[" : "]"
  }
  let stack = [];
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    let currStr = arr[i];
    stack = [];
    for (let j = 0; j < currStr.length; j++) {
      if (currStr[j] in braces) {
        stack.push(currStr[j])
      } else if (currStr[j] === ")" || currStr[j] === "}" || currStr[j] === "]") {
        if (braces[stack.slice(-1)] === currStr[j]) {
          stack.pop();
        } else {
          result.push("NO");
          break;
        }
      }

      if (j === currStr.length - 1) {
        if (!stack.length) {
          result.push("YES")
        } else {
          result.push("NO")
        }
      }
    }
  }

  return result;
}

console.log(braces(["((", "))", "()("]))
console.log(braces(["({[]})", "[]", "{[}]", "[{)(}]", "{}"]))
console.log(braces(["()", "[]", "{}"]))
