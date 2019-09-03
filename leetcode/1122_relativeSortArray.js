var relativeSortArray = function(arr1, arr2) {
  let result = [];
  let map = {};
  let notInArr2 = [];
  
  for (let num of arr2) {
    map[num] = [];
  }
  
  for (let num of arr1) {
    if (map.hasOwnProperty(num)) {
      map[num].push(num);
    } else {
      notInArr2.push(num);
    }
  }
  
  for (let num of arr2) {
    result.push(...map[num])
  }
  
  return result.concat(notInArr2.sort((a,b) => a - b))
};