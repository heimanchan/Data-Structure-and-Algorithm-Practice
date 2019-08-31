var pathSum = function(root, sum) {
  if (!root) return 0;
  
  return helper(root, 0, sum) + pathSum(root.left, sum) + pathSum(root.right, sum);
};

function helper(node, prevSum, sum) {
  if (!node) return 0;
  let currSum = prevSum + node.val;
  
  return (currSum === sum) + helper(node.left, currSum, sum) + helper(node.right, currSum, sum)
}