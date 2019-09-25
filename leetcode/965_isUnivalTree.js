var isUnivalTree = function (root) {
  const val = root.val;
  let stack = [root];

  while (stack.length) {
    let node = stack.pop()
    if (val !== node.val) return false;
    if (node.right) stack.push(node.right);
    if (node.left) stack.push(node.left);
  }

  return true;
};