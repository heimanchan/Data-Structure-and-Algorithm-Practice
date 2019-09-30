var maxDepth = function(root) {
  if (!root) return 0;
  const queue = [root];
  let level = 0;
  
  while (queue.length) {
    let size = queue.length;
    
    for (let i = 0; i < size; i++) {
      let node = queue.shift();
      
      if (i === size - 1) {
        level += 1;
      }
      
      queue.push(...node.children);
    }
  }
  
  return level;
};