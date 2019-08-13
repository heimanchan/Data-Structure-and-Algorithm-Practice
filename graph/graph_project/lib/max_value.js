function maxValue(node, visited=new Set()) {
  let stack = [node];
  let max = -Infinity;

  while (stack.length) {
    let node = stack.pop();
    if (visited.has(node.val)) continue;

    max = Math.max(max, node.val);
    stack.push(...node.neighbors);
    visited.add(node.val);
  }

  return max;
}

module.exports = {
    maxValue
};