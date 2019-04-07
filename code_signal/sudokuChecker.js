function sudokuChecker(grid) {
  const isValid = cb => {
    for (let i = 0; i < grid.length; i++) {
      let set = new Set;
      for (let j = 0; j < grid.length; j++) {
        if (cb(i, j) !== ".") {
          if (set.has(cb(i, j))) {
            return false
          } else set.add(cb(i, j));
        }
      }
    }
    return true;
  }

  return isValid((i, j) => grid[i][j])
    && isValid((i, j) => grid[j][i])
    && isValid((i, j) => grid[Math.floor(i / 3) * 3 + Math.floor(j / 3)][i % 3 * 3 + j % 3])
}
