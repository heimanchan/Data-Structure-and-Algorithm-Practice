var lengthOfLongestSubstring = function(s) {
  let lastSeen = {};
  let startIdx = 0;
  // let result = [0, 1];
  let result = 0;
  
  for (let i = 0; i < s.length; i++) {
    const ch = s[i];
    
    if (ch in lastSeen) {
      startIdx = Math.max(startIdx, lastSeen[ch] + 1)
    }
    
    if (result < i+1 - startIdx) {
      result = i+1 - startIdx
    }
    
    lastSeen[ch] = i;
  }
  
  return result
};