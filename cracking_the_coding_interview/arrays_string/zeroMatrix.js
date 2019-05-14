const zeroMatrix = matrix => {
  let row = [];
  let col = [];

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === 0) {
        row[i] = true;
        col[j] = true;
      }
    }
  }

  for (let m = 0; m < row.length; m++) {
    if (row[m]) zeroRow(matrix, m)
  }

  for (let n = 0; n < col.length; n++) {
    if (col[n]) zeroCol(matrix, n)
  }
  
  return matrix;

  function zeroRow(matrix, row) {
    for (let i = 0; i < matrix[0].length; i++) {
      matrix[row][i] = 0;
    }
  }

  function zeroCol(matrix, col) {
    for (let i = 0; i < matrix.length; i++) {
      matrix[i][col] = 0;
    }
  }
}

console.log(zeroMatrix([[1,0], [1,1]]))
console.log(zeroMatrix([[1,1,0], [1,1,1]]))
console.log(zeroMatrix([[1,1,0], [1,1,1], [1,1,1]]))
console.log(zeroMatrix([[1,1,1], [1,1,1], [1,1,1]]))