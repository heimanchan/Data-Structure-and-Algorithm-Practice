const findClosestValueInBst = (tree, target) => {
  return helper(tree, target, Infinity);
}

const helper = (tree, target, closest) => {
  let node = tree;

  while (node !== null) {
    if (Math.abs(target - node.value) < Math.abs(target - closest)) {
      closest = node.value;
    }

    if (target < node.value) {
      node = node.left;
    } else if (target > node.value) {
      node = node.right;
    } else break;
  }
  return closest;
}