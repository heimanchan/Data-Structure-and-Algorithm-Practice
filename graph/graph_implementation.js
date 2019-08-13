class GraphNode {
  constructor(val) {
    this.val = val;
    this.neighbors = [];
  }
}

let a = new GraphNode('a');
let b = new GraphNode('b');
let c = new GraphNode('c');
let d = new GraphNode('d');
let e = new GraphNode('e');
let f = new GraphNode('f');

a.neighbors = [b, c, e];
c.neighbors = [b, d];
e.neighbors = [a];
f.neighbors = [e];


// Recursive
// function dfsTraverse(node, visited = new Set()) {
//   if (visited.has(node.val)) return;

//   console.log(node.val);
//   visited.add(node.val);

//   node.neighbors.forEach(neighbor => {
//     dfsTraverse(neighbor, visited);
//   });
// }


// Iteration
function dfsTraverse(node, visited = new Set()) {
  let stack = [node];

  while (stack.length) {
    let curr = stack.pop();
    if (visited.has(curr.val)) continue;

    console.log(curr.val);
    visited.add(curr.val);

    stack.push(...curr.neighbors);
  }
}

dfsTraverse(f)