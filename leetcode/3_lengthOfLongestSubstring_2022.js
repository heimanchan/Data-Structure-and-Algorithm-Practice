/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  const letters = {};
  let ans = 0;
  let left = 0;
  let right = 0;

  while (right < s.length) {
    let charR = s[right];
    let lastSeen = letters[charR];

    if (lastSeen >= 0 && lastSeen >= left && lastSeen < right) {
      left = lastSeen + 1;
    }

    letters[charR] = right;

    ans = Math.max(ans, right - left + 1);
    right++;
  }

  return ans;
};
