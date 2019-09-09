function hasPathWithGivenSum(t, s) {
  if (!t) return s === 0;

  return helper(t, s);
}

function helper(node, sum) {
  if (!node.left && !node.right && node.value === sum) {
    return true;
  }

  sum -= node.value;
  return (!!node.left && helper(node.left, sum)) || 
    (!!node.right && helper(node.right, sum))
}