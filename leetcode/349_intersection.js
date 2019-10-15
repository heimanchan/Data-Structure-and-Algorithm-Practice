var intersection = function(nums1, nums2) {
  let result = [];
  let set1 = new Set(nums1);
  let set2 = new Set(nums2);
  
  if (set1.size < set2.size) {
    for (let num of set1) {
      if (set2.has(num)) result.push(num);
    }
  } else {
    for (let num of set2) {
      if (set1.has(num)) result.push(num);
    }
  }
  
  return result;
};