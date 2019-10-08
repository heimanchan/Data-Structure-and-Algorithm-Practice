var transpose = function(A) {
  let result = [];
  
  for (let i = 0; i < A[0].length; i++) {
    let newRow = [];
    
    for (let j = 0; j < A.length; j++) {
      newRow.push(A[j][i]);
    }
    
    result.push(newRow);
  }
  
  return result;
};