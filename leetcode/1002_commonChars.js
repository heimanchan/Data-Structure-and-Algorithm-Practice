var commonChars = function(A) {
  let firstChars = A[0].split("");
  
  for (let i = 1; i < A.length; i++) {
    let currChars = A[i].split("");
    
    firstChars = firstChars.filter(char => {
      let idx = currChars.indexOf(char);
      
      return idx > -1 ? currChars[idx] = true : false;
    })
  }
  
  return firstChars;
};