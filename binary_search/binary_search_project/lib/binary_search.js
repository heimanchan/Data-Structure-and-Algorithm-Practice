function binarySearch(array, target) {
  if (array.length === 0) return false;

  let mid = Math.floor(array.length / 2);
  let left = array.slice(0, mid);
  let right = array.slice(mid + 1);

  if (array[mid] === target) {
    return true;
  } else if (target < array[mid]) {
    return binarySearch(left, target)
  } else if (target > array[mid]) {
    return binarySearch(right, target)
  }
}

function binarySearchIndex(array, target, low = 0, high = array.length - 1) {
  if (low === high) return -1;

  let mid = Math.floor((low + high) / 2);

  if (target < array[mid]) {
    return binarySearchIndex(array, target, 0, mid)
  } else if (target > array[mid]) {
    return binarySearchIndex(array, target, mid + 1, high)
  } else {
    return mid;
  }
}


module.exports = {
    binarySearch,
    binarySearchIndex
};