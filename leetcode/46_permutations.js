const permute = function(nums) {
  const result = [];
  helper(nums, [])
  return result;
  
  function helper(array, currPer) {
    if (!array.length && currPer.length) {
      result.push(currPer);
    } else {
      console.log(array, currPer, result)
      for (let i = 0; i < array.length; i++) {
        const newArr = array.slice(0,i).concat(array.slice(i+1));
        const newPer = currPer.concat(array[i]);
        helper(newArr, newPer)
      }
    }
  }
};