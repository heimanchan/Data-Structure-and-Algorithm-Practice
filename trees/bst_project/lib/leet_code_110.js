// View the full problem and run the test cases at:
//  https://leetcode.com/problems/balanced-binary-tree/


function isBalanced(root) {
  if (!root) return -1;
  let leftHeight = treeHeight(root.left)
  let rightHeight = treeHeight(root.right)

  return Math.abs(leftHeight - rightHeight) <= 1
}

function treeHeight(root) {
  if (!root) return -1;
  return 1 + Math.max(treeHeight(root.left), treeHeight(root.right))
}