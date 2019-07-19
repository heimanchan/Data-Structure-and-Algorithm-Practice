function isTreeSymmetric(t) {
  if (!t) return true;
  return isNodeSymmetric(t.left, t.right);
}

function isNodeSymmetric(lNode, rNode) {
  if (!lNode && !rNode) return true;
  if (!lNode || !rNode) return false;

  return (lNode.value === rNode.value) && 
    (isNodeSymmetric(lNode.left, rNode.right) && 
     isNodeSymmetric(lNode.right, rNode.left))
}