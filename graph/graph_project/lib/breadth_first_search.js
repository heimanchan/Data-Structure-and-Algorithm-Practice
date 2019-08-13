function breadthFirstSearch(startingNode, targetVal) {
  let queue = [startingNode];
  let visited = new Set();

  while (queue.length) {
    let node = queue.shift();
    if (visited.has(node.val)) continue;

    if (node.val === targetVal) {
      return node;
    }

    visited.add(node.val);
    queue.push(...node.neighbors);
  }

  return null;
}

module.exports = {
    breadthFirstSearch
};