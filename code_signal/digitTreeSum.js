//
// Definition for binary tree:
// function Tree(x) {
//   this.value = x;
//   this.left = null;
//   this.right = null;
// }
function digitTreeSum(t) {
    if (!t) return 0;
    
    let sum = 0;
    let array = [{ node: t, path: ''}];
    
    while (array.length) {
        let { node, path } = array.shift();
        let newPath = path + node.value.toString();
        if (!node.left && !node.right) {
            //leaf node 
            sum += parseInt(newPath);
        } else {
            if (node.left) {
                array.push({ node: node.left, path: newPath});
            }
            
            if (node.right) {
                array.push({ node: node.right, path: newPath});
            }
        }
    }
    
    return sum;
}