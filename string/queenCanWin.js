function queenCanWin(x, y, enemyX, enemyY) {
  let canWin = false;

  if (
    x === enemyX ||
    y === enemyY ||
    Math.abs(x - enemyX) === Math.abs(y - enemyY)
  ) {
    canWin = true;
  }

  return canWin;
}

console.log(queenWins(4, 5, 6, 7));
console.log(queenWins(4, 5, 6, 6));
console.log(queenWins(4, 5, 4, 6));
console.log(queenWins(0, 0, 4, 6));
console.log(queenWins(7, 7, 6, 6));
