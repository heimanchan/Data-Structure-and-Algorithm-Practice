class Node {
  constructor(val) {
    this.val = val;
    this.left = this.right = null;
  }
}

function secondLargestInBST(root) {
  if (!root) return null;
  if (!root.left && !root.right) return null;

  let node = root;
  let parent = null;
  while (node.right) {
    parent = node;
    node = node.right;
  }

  if (!node.left) {
    return parent.val;
  } else {
    node = node.left;
    while (node.right) {
      node = node.right;
    }

    return node.val;
  }
}

function getLargestNode(root) {
  if (!root.right) return root;

  return getLargestNodeParent(root.right);
}

let root = new Node(5)
root.left = new Node(2)
root.right = new Node(7)
root.right.right = new Node(8)
root.right.right.left = new Node(7.1)
console.log(secondLargestInBST(root))

let oneNode = new Node(2);
console.log(secondLargestInBST(oneNode))

let oneRight = new Node(2);
oneRight.right = new Node(3);
console.log(secondLargestInBST(oneRight))
