const graph = {
  'a': ['b', 'c', 'e'],
  'b': [],
  'c': ['b', 'd'],
  'd': [],
  'e': ['a'],
  'f': ['e']
}

let graph2 = {
  'h': ['i', 'j'],
  'i': [],
  'j': ['k'],
  'k': [],
  'l': ['m'],
  'm': []
}

function depthFirst(graph) {
  let visited = new Set();

  for (let node in graph) {
    helper(node, graph, visited)
  }
}

function helper(node, graph, visited) {
  if (visited.has(node)) return;

  console.log(node);
  visited.add(node);

  graph[node].forEach(neighbor => {
    helper(neighbor, graph, visited);
  });
}

depthFirst(graph)
console.log("")
depthFirst(graph2)