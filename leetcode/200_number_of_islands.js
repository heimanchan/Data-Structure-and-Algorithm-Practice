const numIslands = function (grid) {
  if (!grid.length) return 0;

  let result = 0;
  const width = grid.length;
  const height = grid[0].length;

  for (let i = 0; i < width; i++) {
    for (let j = 0; j < height; j++) {
      if (grid[i][j] === '0') continue;

      result++;
      dfs(i, j);
    }
  }

  return result;

  function dfs(i, j) {
    if (i < 0 || j < 0 || i === width || j === height) return;
    if (grid[i][j] === '0') return;

    grid[i][j] = '0';
    dfs(i - 1, j);
    dfs(i + 1, j);
    dfs(i, j - 1);
    dfs(i, j + 1);
  }
};