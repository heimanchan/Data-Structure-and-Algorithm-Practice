var sumEvenAfterQueries = function(A, queries) {
  let result = [];
  
  for (let i = 0; i < queries.length; i++) {
    let query = queries[i];
    
    A[query[1]] += query[0];
    result.push(sumEven(A))
  }
  
  return result;
  
  function sumEven(arr) {
    let sum = 0;
    
    arr.forEach(num => num % 2 === 0 ? sum += num : 0);
    
    return sum;
  }
};
