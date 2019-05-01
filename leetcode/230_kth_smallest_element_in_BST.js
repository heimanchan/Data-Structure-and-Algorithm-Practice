const kthSmallest = function(root, k) {
  if (!root) return;
  
  let stack = [];
  
  while (root || stack.length) {
    while (root) {
      stack.push(root);
      root = root.left;
    }
    
    root = stack.pop();
    if (--k === 0) break;
    root = root.right;
  }
  
  return root.val;
};