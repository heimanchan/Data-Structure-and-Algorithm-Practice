function quickSort(array) {
  if (array.length <= 1) return array;

  let pivot = array.shift();
  let left = quickSort(array.filter(el => el < pivot));
  let right = quickSort(array.filter(el => el >= pivot));

  return [...left, pivot, ...right]
}


module.exports = {
    quickSort
};