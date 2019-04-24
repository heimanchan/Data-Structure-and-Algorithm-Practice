const isValidSudoku = function (board) {
  const checkValid = cb => {
    for (let i = 0; i < 9; i++) {
      let set = new Set;
      for (let j = 0; j < 9; j++) {
        if (cb(i, j) !== '.') {
          if (set.has(cb(i,j))) {
            return false
          } else {
            set.add(cb(i,j))
          }
        }
      }
    }

    return true;
  }

  return checkValid((x,y) => board[x][y])
      && checkValid((x,y) => board[y][x])
      && checkValid((x,y) => board[Math.floor(x/3)*3 + Math.floor(y/3)][x%3*3 + y%3]);


  // let row = [{}, {}, {}, {}, {}, {}, {}, {}, {}];
  // let column = [{}, {}, {}, {}, {}, {}, {}, {}, {}]
  // let block = [{}, {}, {}, {}, {}, {}, {}, {}, {}]

  // for (let i = 0; i < 9; i++) {
  //   for (let j = 0; j < 9; j++) {
  //     // i row, j column
  //     // block index
  //     let blockIndex = Math.floor(i / 3) * 3 + Math.floor(j / 3);
  //     let c = board[i][j];
  //     if (c == '.') {
  //       continue;
  //     }
  //     if (row[i][c] == null && column[j][c] == null && block[blockIndex][c] == null) {
  //       row[i][c] = '';
  //       column[j][c] = '';
  //       block[blockIndex][c] = '';
  //     } else {
  //       return false;
  //     }
  //   }
  // }
  // return true;
};