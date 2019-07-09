var preorderTraversal = function(root) {
  // if (!root) return [];
  // let result = [];

  // helper(root, result);
  // return result;

  if (!root) return [];
  let result = [];
  let stack = [root];

  while (stack.length) {
    let node = stack.pop();

    result.push(node.val);
    if (node.right) stack.push(node.right);
    if (node.left) stack.push(node.left);
  }

  return result;
};

function helper(node, result) {
  if (!node.left && !node.right) return result.push(node.val);
  
  result.push(node.val);
  if (node.left) helper(node.left, result);
  if (node.right) helper(node.right, result);
}