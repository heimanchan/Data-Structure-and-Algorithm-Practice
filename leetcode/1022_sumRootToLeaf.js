var sumRootToLeaf = function (root) {
  let result = 0;
  dfs(root, "");
  return result;

  function dfs(node, binaryStr) {
    if (!node) return;
    binaryStr += node.val;

    if (!node.left && !node.right) {
      result += parseInt(binaryStr, 2);
      return;
    }

    dfs(node.left, binaryStr);
    dfs(node.right, binaryStr);
  }
};