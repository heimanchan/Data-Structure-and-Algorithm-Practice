const decodeString = (s) => {
  let k = "";
  const countStack = [];
  const strStack = [];
  let currentStr = "";

  for (let i = s.length - 1; i >= 0; i--) {
    if (s[i] === "{" || s[i] === "}") {
      continue;
    } else if (!isNaN(s[i])) {
      k = s[i] + k;
    } else if (s[i] === ")") {
      countStack.push(k);
      k = "";
      strStack.push(currentStr);
      currentStr = "";
      console.log(countStack, strStack);
    } else if (s[i] === "(") {
      let decodeStr = "";
      let count = countStack.pop();

      for (let i = 0; i < count; i++) {
        decodeStr += currentStr;
      }

      currentStr = decodeStr;
    } else {
      currentStr = s[i] + currentStr;
    }
  }

  return currentStr;
};

console.log(decodeString("(ab(d){3}){2}"));
console.log(decodeString("(ab(d){10}){3}"));

// function decodeString(s) {
//   let k = "";
//   const countStack = [];
//   const strStack = [];
//   let currentStr = "";

//   for (let i = s.length - 1; i >= 0; i--) {
//     if (s[i] === "{" || s[i] === "}") {
//       console.log(s[i], "continue");
//       continue;
//     } else if (s[i] % 10 == s[i]) {
//       console.log(s[i], "k");
//       // k = k * 10 + parseInt(s[i]);
//       k = s[i] + k;
//     } else if (s[i] === ")") {
//       console.log(s[i], ")");
//       countStack.push(k);
//       strStack.push(currentStr);
//       k = "";
//       currentStr = "";
//       console.log("countStack", countStack);
//     } else if (s[i] === "(") {
//       console.log(s[i], "(");
//       let decodeStr = "";
//       let count = countStack.pop();
//       for (let j = 0; j < count; j++) {
//         console.log("add decodeStr", j, count);
//         decodeStr += currentStr;
//       }

//       currentStr = decodeStr;
//       console.log(s[i], currentStr);
//     } else {
//       currentStr = s[i] + currentStr;
//       console.log(s[i], currentStr);
//     }
//   }

//   return currentStr;
// }
