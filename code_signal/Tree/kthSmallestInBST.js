function kthSmallestInBST(t, k) {
  let result;
  let visited = 0;

  inOrderTraverse(t)

  return result;

  function inOrderTraverse(node) {
    if (!node) return;

    inOrderTraverse(node.left);

    visited++;
    if (visited === k) return result = node.value;

    inOrderTraverse(node.right);
  }
}
