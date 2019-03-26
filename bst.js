class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor() {
    this.root = null;
  }

  insert(val, root=this.root) {
    if (!this.root) {
      this.root = new TreeNode(val);
      return;
    }

    if (val < root.val) {
      if (!root.left) {
        root.left = new TreeNode(val);
      } else {
        this.insert(val, root.left)
      }
    } else {
      if (!root.right) {
        root.right = new TreeNode(val)
      } else {
        this.insert(val, root.right)
      }
    }
  }

  inOrderPrint(root=this.root) {
    if (!root) return;

    this.inOrderPrint(root.left);
    console.log(root.val);
    this.inOrderPrint(root.right);
  }

  search(val, root=this.root) {
    if (!root) return false;

    if (val < root.val) {
      return this.search(val, root.left)
    } else if (val > root.val) {
      return this.search(val, root.right);
    } else {
      return true;
    }
  }

  depthFirst(root=this.root) {
    let stack = [root];
    while (stack.length) {
      let node = stack.pop();
      console.log(node.val);

      // Stack LIFO, left is pop first
      if(node.right) stack.push(node.right);
      if(node.left) stack.push(node.left);
    }
  }

  depthFirstRec(root=this.root) {
    if (!root) return;

    console.log(root);
    depthFirstRec(root.left);
    depthFirstRec(root.right);
  }

  breadthFirst(root) {
    let queue = [root];
    while (queue.length) {
      let node = queue.shift();

      console.log(node.val);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
  }
}

let tree1 = new BST();
tree1.insert(10); 
tree1.insert(5);
tree1.insert(16);
tree1.insert(1);
tree1.insert(7);
tree1.insert(16);
tree1.inOrderPrint();

console.log(tree1.search(1));
console.log(tree1.search(16));
console.log(tree1.search(14));