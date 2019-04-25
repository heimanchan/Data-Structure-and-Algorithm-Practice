const constructMaximumBinaryTree = function (nums) {
  if (!nums.length) return null;

  let rootVal = Math.max(...nums);
  let root = new TreeNode(rootVal);

  root.left = constructMaximumBinaryTree(nums.slice(0, nums.indexOf(rootVal)))
  root.right = constructMaximumBinaryTree(nums.slice(nums.indexOf(rootVal) + 1))

  return root
};