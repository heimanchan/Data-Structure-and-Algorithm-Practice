var dailyTemperatures = function(T) {
  let result = new Array(T.length).fill(0);
  let stack = [];
  
  for (let i = 0; i < T.length; i++) {
    while (stack.length && T[stack[stack.length - 1]] < T[i]) {
      let j = stack.pop();
      result[j] = i - j;
    }
    
    stack.push(i)
  }
  
  return result;
};