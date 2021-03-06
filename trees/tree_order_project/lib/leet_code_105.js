// View the full problem and run the test cases at:
//  https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/

const { TreeNode } = require('./tree_node.js');

function buildTree(preorder, inorder) {
  if (!preorder.length && !inorder.length) return null;

  let rootVal = preorder[0];
  let root = new TreeNode(rootVal);

  let midIdx = inorder.indexOf(rootVal);
  let leftInorder = inorder.slice(0, midIdx);
  let rightInorder = inorder.slice(midIdx + 1);
  let leftPreorder = preorder.filter(val => leftInorder.includes(val))
  let rightPreorder = preorder.filter(val => rightInorder.includes(val))

  let leftTree = buildTree(leftPreorder, leftInorder)
  let rightTree = buildTree(rightPreorder, rightInorder)

  root.left = leftTree;
  root.right = rightTree;
  return root;
}

console.log(buildTree([], []))
console.log(buildTree([3, 9, 20, 15, 7], [9, 3, 15, 20, 7]))