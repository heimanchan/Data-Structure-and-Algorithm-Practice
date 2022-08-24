/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function (root) {
  if (!root) return 0;

  let stack = [];
  let depths = [];
  let ans = 0;

  stack.push(root);
  depths.push(1);

  while (stack.length) {
    let node = stack.pop();
    let depth = depths.pop();

    if (node !== null) {
      ans = Math.max(ans, depth);
      stack.push(node.left);
      depths.push(depth + 1);
      stack.push(node.right);
      depths.push(depth + 1);
    }
  }

  return ans;
};
