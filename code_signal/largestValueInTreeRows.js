// You have a binary tree t.Your task is to find the largest value in each row of this tree.In a tree, a row is a set of nodes that have equal depth.For example, a row with depth 0 is a tree root, a row with depth 1 is composed of the root's children, etc.

// Return an array in which the first element is the largest value in the row with depth 0, the second element is the largest value in the row with depth 1, the third element is the largest element in the row with depth 2, etc.

//   Example

// For

// t = {
//   "value": -1,
//   "left": {
//     "value": 5,
//     "left": null,
//     "right": null
//   },
//   "right": {
//     "value": 7,
//     "left": null,
//     "right": {
//       "value": 1,
//       "left": null,
//       "right": null
//     }
//   }
// }
// the output should be largestValuesInTreeRows(t) = [-1, 7, 1].

function largestValuesInTreeRows(t) {
  if (!t) return [];
  
  let queue = [t];
  let next = [];
  let result = [];
  let max = -Infinity;
  
  while (queue.length) {
    let curNode = queue.shift();
    if (curNode.value > max) {
      console.log(curNode.value)
      max = curNode.value;
    }
    
    if (curNode.left) {
      next.push(curNode.left)
    }
    
    if (curNode.right) {
      next.push(curNode.right)
    }

    if (!queue.length) { 
      console.log(next)
      result.push(max)      
      queue = next;
      next = []
      max = -Infinity
    }
  }
  
  return result;
}