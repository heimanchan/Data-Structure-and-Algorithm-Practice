var numRookCaptures = function(board) {
  let result = 0;
  let len = board.length;
  let rook = findRook(board);
  let [i, j] = [rook[0], rook[1]]
  
  while (i >= 0 && i < len) {
    if (board[i][j] === "p") {
      result++;
      break;
    }
    
    if (board[i][j] === "B") {
      break;
    }
    
    i++;
  }
  i = rook[0];
  
  while (i >= 0 && i < len) {
    if (board[i][j] === "p") {
      result++;
      break;
    }
    
    if (board[i][j] === "B") {
      break;
    }
    
    i--;
  }
  i = rook[0];
  
  while (j >= 0 && j < len) {
    if (board[i][j] === "p") {
      result++;
      break;
    }
    
    if (board[i][j] === "B") {
      break;
    }
    
    j++;
  }
  j = rook[1];
  
  while (j >= 0 && j < len) {
    if (board[i][j] === "p") {
      console.log([i,j])
      
      result++;
      break;
    }
    
    if (board[i][j] === "B") {
      break;
    }
    
    j--;
  }
  
  return result;
  
  function findRook() {
    for (let i = 0; i < board.length; i++) {
      for (let j = 0; j < board[0].length; j++) {
        if (board[i][j] === "R") return [i, j];
      }
    }
  }
};

