var levelOrder = function(root) {
  if (!root) return [];
  
  let result = [];
  let queue = [root];
  
  while (queue.length) {
    let size = queue.length;
    let currLevel = [];
    
    for (let i = 0; i < size; i++) {
      let node = queue.shift();
      currLevel.push(node.val);
      queue.push(...node.children);
    }
    
    result.push(currLevel)
  }
  
  return result;
};