function merge(array1, array2) {
  let result = [];

  while(array1.length && array2.length) {
    result.push(array1[0] < array2[0] ? array1.shift() : array2.shift());
  }

  return result.concat(array1, array2);
}

function mergeSort(array) {
  if (array.length <= 1) return array;

  let mid = Math.floor(array.length / 2);
  let left = array.slice(0, mid);
  let right = array.slice(mid);

  return merge(mergeSort(left), mergeSort(right))
}

module.exports = {
    merge,
    mergeSort
};