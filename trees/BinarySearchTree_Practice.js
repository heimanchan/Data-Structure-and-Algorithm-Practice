class Node {
  constructor(data, left = null, right = null) {
    this.data = data;
    this.left = left;
    this.right = right;
  }
}

class BST {
  constructor() {
    this.root = null;
  }

  add(data) {
    const node = this.root;
    if (node === null) {
      this.root = new Node(data);
      return;
    } else {
      function searchTree(node) {
        if (data < node.data) {
          //left
          if (node.left === null) {
            node.left = new Node(data);
            return;
          } else {
            return searchTree(node.left);
          }
        } else if (data > node.data) {
          //right
          if (node.right === null) {
            node.right = new Node(data);
            return;
          } else {
            return searchTree(node.right);
          }
        } else {
          return null;
        }
      }

      return searchTree(node);
    }
  }
}

function printInOrder(root) {
  if (!root) return null;
  const ans = [];
  const stack = [];

  while (root || stack.length) {
    while (root) {
      stack.push(root);
      root = root.left;
    }

    root = stack.pop();
    ans.push(root.data);
    root = root.right;
  }

  return ans;
}

function maxDepthStack(root) {
  if (!root) return 0;
  let ans = 0;
  let stack = [root];
  let depths = [1];

  while (stack.length) {
    let node = stack.pop();
    let depth = depths.pop();

    if (node !== null) {
      ans = Math.max(ans, depth);
      stack.push(node.left);
      depths.push(depth + 1);
      stack.push(node.right);
      depths.push(depth + 1);
    }
  }

  return ans;
}

function maxDepthRecurrsion(root) {
  if (!root) return 0;

  let leftHeight = maxDepthRecurrsion(root.left);
  let rightHeight = maxDepthRecurrsion(root.right);

  return Math.max(leftHeight, rightHeight) + 1;
}

let bst = new BST();
bst.add(4);
bst.add(2);
bst.add(7);
bst.add(1);
bst.add(3);
bst.add(5);
bst.add(6);
bst.add(8);

console.log(printInOrder(bst.root));
console.log(maxDepthStack(bst.root));
console.log(maxDepthRecurrsion(bst.root));
