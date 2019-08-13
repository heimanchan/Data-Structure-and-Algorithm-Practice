function numRegions(graph) {
  let visited = new Set;
  let count = 0;

  for (let node in graph) {
    count += helper(node, graph, visited);
  }

  return count
}

function helper(node, graph, visited) {
  if (visited.has(node)) return 0;

  let count = 0;
  let stack = [node];

  while (stack.length) {
    let curr = stack.pop();
    if (visited.has(curr)) continue;

    visited.add(curr);
    stack.push(...graph[curr]);
  }

  return count + 1;
}

module.exports = {
    numRegions
};