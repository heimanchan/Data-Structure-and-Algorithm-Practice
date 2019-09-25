var isUnivalTree = function(root) {
    const val = root.val;
    let q = [];
    q.push(root);
    
    while(q.length !== 0) {
        let tmp = q.shift();
        
        if(tmp.val !== val) return false;
        if(tmp.left) q.push(tmp.left);
        if(tmp.right) q.push(tmp.right);
    }    
    return true;
};