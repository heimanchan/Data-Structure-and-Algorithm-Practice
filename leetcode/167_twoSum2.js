var twoSum = function(numbers, target) {
  let map = {};
  
  for (let i = 0; i < numbers.length; i++) {
    let pair = target - numbers[i];
    
    if (map.hasOwnProperty(numbers[i])) {
      return [map[numbers[i]], i + 1];
    } else {
      map[pair] = i + 1;
    }
  }
};