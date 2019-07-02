function maxPathSum(tree) {
  const [_, maxPathSum] = [...findMaxSum(tree)]

  return maxPathSum;
}

function findMaxSum(tree) {
  if (!tree) return [0, 0];

  const [leftBrunchSum, leftPathSum] = findMaxSum(tree.left);
  const [rightBrunchSum, rightPathSum] = findMaxSum(tree.right);
  const maxChildBrunchSum = Math.max(leftBrunchSum, rightBrunchSum);

  const { value } = tree;
  // 											handle negative sum case, e.g. -1 + 2 < 2
  const maxBrunchSum = Math.max(maxChildBrunchSum + value, value);
  const subTreeSum = leftBrunchSum + value + rightBrunchSum;
  const maxRootSum = Math.max(subTreeSum, maxBrunchSum);
  const maxPathSum = Math.max(leftPathSum, rightPathSum, maxRootSum);

  return [maxBrunchSum, maxPathSum]
}
