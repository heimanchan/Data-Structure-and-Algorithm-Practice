var sumRootToLeaf = function(root) {
  let result = 0;
  dfs(root, '');
  return result;

  function dfs(root, binaryStr) {
      if(!root) return;
      binaryStr += root.val;
      if(!root.left && !root.right) {
          result += parseInt(binaryStr, 2);
          return;
      }
      dfs(root.left, binaryStr);
      dfs(root.right, binaryStr);
  }
};