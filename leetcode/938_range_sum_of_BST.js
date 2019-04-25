const rangeSumBST = function (root, L, R) {
  if (!root) return 0;
  let result = 0;

  // let stack = [root];
  // while (stack.length) {
  //   let node = stack.pop();
  //   if (node.val >= L && node.val <= R) result += node.val;
  //   if (node.right) stack.push(node.right)
  //   if (node.left) stack.push(node.left)
  // }
  
  if (root.val >= L && root.val <= R) result += root.val
  if (root.left) result += rangeSumBST(root.left, L, R)
  if (root.right) result += rangeSumBST(root.right, L, R)

  return result;
};