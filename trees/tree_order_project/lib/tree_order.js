function inOrderArray(root) {
  if (!root) return [];
  let result = [];

  if (root.left) result = result.concat(inOrderArray(root.left));
  result.push(root.val)
  if (root.right) result = result.concat(inOrderArray(root.right));

  return result;
}

function postOrderArray(root) {
  if (!root) return [];
  let result = [];

  if (root.left) result = result.concat(postOrderArray(root.left));
  if (root.right) result = result.concat(postOrderArray(root.right));
  result.push(root.val)

  return result;
}


module.exports = {
    inOrderArray,
    postOrderArray
};