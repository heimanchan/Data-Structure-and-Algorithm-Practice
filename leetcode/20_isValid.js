var isValid = function(s) {
  const map = {
    ")" : "(",
    "}" : "{",
    "]" : "["
  }
  
  const stack = [];
  
  for (ch of s) {
    if (ch === "(" || ch === "[" || ch === "{") {
      stack.push(ch);
    }
    
    if (ch === ")" || ch === "}" || ch === "]") {
      if (stack.pop() !== map[ch]) return false;
    }
  }
  
  return !stack.length;
};