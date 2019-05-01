const isValidBST = function (root) {
  //   if (!root) true;
  //   let stack = [];
  //   let prev;

  //   while (root || stack.length) {
  //     while (root) {
  //       stack.push(root);
  //       root = root.left;
  //     }

  //     root = stack.pop();
  //     if (prev && root.val <= prev.val) return false;
  //     prev = root;
  //     root = root.right;
  //   }

  //   return true;
  if (!root) return true;

  function dfs(node, min, max) {
    if (!node) return true;
    console.log(min, max)
    if ((min !== null && node.val <= min) || (max !== null && node.val >= max)) return false;

    return dfs(node.left, min, node.val) && dfs(node.right, node.val, max)
  }

  return dfs(root, null, null)
};