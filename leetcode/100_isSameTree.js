var isSameTree = function(p, q) {
  let queue = [p, q];
  
  while (queue.length) {
    let left = queue.shift();
    let right = queue.shift();
    
    if (!left && !right) continue;
    if (!left || !right || left.val !== right.val) return false;
    
    queue.push(left.left, right.left, left.right, right.right);
  }
  
  return true;
};