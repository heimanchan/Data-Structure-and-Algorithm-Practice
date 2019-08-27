var insertIntoBST = function(root, val) {
  if (!root) return null;
  
  let node = root;
  let parentNode = null;
  
  while (node) {
    if (val > node.val) {
      parentNode = node;
      node = node.right;
    } else {
      parentNode = node;
      node = node.left;
    }
  }
  
  if (val > parentNode.val) {
    parentNode.right = new TreeNode(val)
  } else {
    parentNode.left = new TreeNode(val)
  }
  
  return root;
};