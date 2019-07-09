var postorderTraversal = function(root) {
  if (!root) return [];
  
  let result = [];
  helper(root, result);
  return result;
};

function helper(node, result) {
  if (!node.left && !node.right) return result.push(node.val);
  
  if (node.left) helper(node.left, result);
  if (node.right) helper(node.right, result);
  result.push(node.val);
}