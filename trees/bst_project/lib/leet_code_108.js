// View the full problem and run the test cases at:
//  https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree/

// [-10,-3,0,5,9]

function sortedArrayToBST(nums) {
  if (!nums.length) return null;

  let mid = Math.floor(nums.length / 2);
  let root = new TreeNode(nums[mid]);
  root.left = sortedArrayToBST(nums.slice(0, mid))
  root.right = sortedArrayToBST(nums.slice(mid+1))

  return root;
}