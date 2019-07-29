var findTheDifference = function(s, t) {
  let map = {};
  
  for (let i = 0; i < s.length; i++) {
    map[s[i]] = (map[s[i]] || 0) + 1;
  }
  
  for (let j = 0; j < t.length; j++) {
    if (!map.hasOwnProperty(t[j])) {
      return t[j];
    } else {
      map[t[j]] -= 1;
      
      if (map[t[j]] < 0) return t[j];
    }
  }
};