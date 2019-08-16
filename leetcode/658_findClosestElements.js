var findClosestElements = function(arr, k, x) {
  let left = 0; right = arr.length - 1;
  
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    
    if (arr[mid] === x) {
      right = mid;
      break;
    } else if (arr[mid] > x) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  
  left = right;
  right++;
  
  while (k-- > 0) {
    if (right >= arr.length || (left >= 0 && (x - arr[left] <= arr[right] - x))) {
      left--;
    } else {
      right++;
    }
  }
  
  let result = [];
  for (let i = left + 1; i < right; i++) {
    result.push(arr[i])
  }
  
  return result;
};