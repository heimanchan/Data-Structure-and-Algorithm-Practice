const rotateMatrix = matrix => {
  for (let i = 0; i < matrix.length; i++) {
    for (let j = i; j < matrix[i].length; j++) {
      [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]]
    }
  }

  matrix.forEach(arr => arr.reverse());
  return matrix;
}

console.log(rotateMatrix([[1,2,3], [4,5,6], [7,8,9]]))
console.log(rotateMatrix([[1,2,3,4], [5,6,7,8], [9,10,11,12], [13,14,15,16]]))