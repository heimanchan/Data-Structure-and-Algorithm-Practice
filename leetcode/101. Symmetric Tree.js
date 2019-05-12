const isSymmetric = function(root) {
//   return isMirror(root,root)
  
//   function isMirror(t1, t2) {
//     if (t1 === null && t2 === null) return true;
//     if (t1 === null || t2 === null) return false;
    
//     return (t1.val === t2.val)
//       && isMirror(t1.left, t2.right)
//       && isMirror(t1.right, t2.left)
//   }
  
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