const findUnsortedSubarray = function(array) {
  let minUnsorted = Infinity;
  let maxUnsorted = -Infinity;
  
  for (let i = 0; i < array.length; i++) {
    if (array[i] > array[i+1] || array[i] < array[i-1]) {
      minUnsorted = Math.min(minUnsorted, array[i])
      maxUnsorted = Math.max(maxUnsorted, array[i])
    }
  }
  
  if (minUnsorted === Infinity ||  maxUnsorted === -Infinity) return 0;
  
  let start = 0;
  while (array[start] <= minUnsorted) start++;
  
  let end = array.length-1;
  while (array[end] >= maxUnsorted) end--;
  
  return end - start + 1
};