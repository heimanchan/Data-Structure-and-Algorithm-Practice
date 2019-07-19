const isSymmetric = function(root) {  
  let queue = [root, root];
  while(queue.length) {
    let t1 = queue.shift();
    let t2 = queue.shift();
    
    if (!t1 && !t2) continue;
    if ((!t1 || !t2) || (t1.val !== t2.val)) return false;
    
    queue.push(t1.left, t2.right, t1.right, t2.left)
  }
  
  return true;
};

var isSymmetric = function (root) {
  if (!root) return true;

  return isNodeSymmetric(root.left, root.right);

  function isNodeSymmetric(left, right) {
    if (!left && !right) return true;
    if (!left || !right) return false;

    return left.val === right.val &&
      (isNodeSymmetric(left.left, right.right) &&
        isNodeSymmetric(left.right, right.left))
  }
};