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

  function helper(node, min, max) {
    if (!node) return true;

    if ((min !== null && node.val <= min) || (max !== null && node.val >= max)) return false;

    return helper(node.left, min, node.val) && helper(node.right, node.val, max)
  }

  return helper(root, null, null)
};