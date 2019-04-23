function treeSum(root, sum = 0) {
  if (!root) return 0;

  sum = root.val;
  if (root.left) sum += treeSum(root.left, sum)
  if (root.right) sum += treeSum(root.right, sum)

  return sum;
}


module.exports = {
    treeSum
};