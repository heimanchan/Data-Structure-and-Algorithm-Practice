var nextGreaterElement = function(nums1, nums2) {
  const map = {};
  const stack = [];
  const result = [];
  
  for (let num of nums2) {
    while (stack.length && stack[stack.length - 1] < num) {
      map[stack.pop()] = num;
    }
    
    stack.push(num)
  }
  
  for (let num of nums1) {
    if (map[num]) {
      result.push(map[num])
    } else {
      result.push(-1);
    }
  }
  
  return result;
};