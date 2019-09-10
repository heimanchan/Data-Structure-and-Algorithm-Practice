var diameterOfBinaryTree = function(root) {
  if (!root) return 0;
  
  let result = 1;
  dfs(root);
  
  return result - 1;
  
  function dfs(node) {
    if (!node) return 0;
    
    let left = dfs(node.left);
    let right = dfs(node.right);
    result = Math.max(result, left + right + 1);
    
    return Math.max(left, right) + 1;
  }
};