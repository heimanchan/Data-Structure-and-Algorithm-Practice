const inorderTraversal = function(root) {
//   if (!root) return [];
  
//   let result = [];
//   if (root.left) {
//     result = result.concat(inorderTraversal(root.left))
//   }
  
//   result.push(root.val)
  
//   if (root.right) {
//     result = result.concat(inorderTraversal(root.right))
//   }

//   return result;
  if (!root) return [];
  
  let result = [];
  let stack = [];
  
  while (root || stack.length) {
    while (root) {
      stack.push(root)
      root = root.left;
    }
    
    root = stack.pop();
    result.push(root.val);
    root = root.right;
  }
  
  return result
};