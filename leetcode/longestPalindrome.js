var longestPalindrome = function(s) {
  let longest = [0, 1];
  
  for (let i = 1; i < s.length; i++) {
    let odd = getLongest(i - 1, i + 1);
    let even = getLongest(i - 1, i);
    
    let currLongest = odd[1] - odd[0] > even[1] - even[0] ? odd : even;
    longest = currLongest[1] - currLongest[0] > longest[1] - longest[0] ? currLongest : longest;
  }
  
  return s.slice(longest[0], longest[1]);

  function getLongest(left, right) {
    while (left >= 0 && right <= s.length - 1) {
      if (s[left] !== s[right]) break;
      
      left--;
      right++;
    }
    
    return [left+1, right];
  }
};