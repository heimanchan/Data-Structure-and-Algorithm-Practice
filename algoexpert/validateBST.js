// Validate if a BST is valid

function validateBst(tree) {
  return validateBSTHelper(tree, -Infinity, Infinity);
}

function validateBSTHelper(tree, min, max) {
  if (!tree) return true;
  if (tree.value >= max || tree.value < min) return false;

  return validateBSTHelper(tree.left, min, tree.value) &&
    validateBSTHelper(tree.right, tree.value, max)
}