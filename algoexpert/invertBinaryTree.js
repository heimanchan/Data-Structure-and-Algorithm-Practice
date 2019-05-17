function invertBinaryTree(tree) {
	let queue = [tree];
	
	while (queue.length) {
		let node = queue.shift();
		if (node.left) queue.push(node.left);
		if (node.right) queue.push(node.right);
		swap(node);
	}
	
	return tree;
}

function swap(tree) {
	return [tree.left, tree.right] = [tree.right, tree.left];
}