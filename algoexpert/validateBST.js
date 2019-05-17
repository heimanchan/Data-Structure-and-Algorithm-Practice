function validateBst(tree, min = -Infinity, max = Infinity) {
	if (!tree) return true;
	if (tree.value >= max || tree.value < min) return false;
		
	return validateBst(tree.left, min, tree.value) && validateBst(tree.right, tree.value, max)
}
