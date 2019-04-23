//
// Definition for binary tree:
// function Tree(x) {
//   this.value = x;
//   this.left = null;
//   this.right = null;
// }
// function digitTreeSum(t) {
//   if (!t) return 0;
  
//   let sum = 0;
//   let array = [{ node: t, path: ''}];
  
//   while (array.length) {
//       let { node, path } = array.shift();
//       let newPath = path + node.value.toString();
//       if (!node.left && !node.right) {
//           //leaf node 
//           sum += parseInt(newPath);
//       } else {
//           if (node.left) {
//               array.push({ node: node.left, path: newPath});
//           }
          
//           if (node.right) {
//               array.push({ node: node.right, path: newPath});
//           }
//       }
//   }
  
//   return sum;
// }

// Using DFS
function digitTreeSum(t) {
  if (!t) return null;

  let sum = [0];
  let count = 0;

  function dfs(root, count, sum) {
    if (!root) return;

    if (!root.left && !root.right) {
      sum[0] += count * 10 + root.value;
      return;
    }

    count = count * 10 + root.value;
    dfs(root.left, count, sum);
    dfs(root.right, count, sum);
  }

  dfs(t, count, sum);
  return sum[0];
}