function maxPathSum(tree) {
	const [_, maxSum] = [...subMaxSum(tree)];
	return maxSum;
	
	function subMaxSum(tree) {
		if (!tree) return [0, 0];
		
		const [leftMaxBrunchSum, leftMaxPathSum] = subMaxSum(tree.left);
		const [rightMaxBrunchSum, rightMaxPathSum] = subMaxSum(tree.right);
		const maxChildBrunchSum = Math.max(leftMaxBrunchSum, rightMaxBrunchSum);
		
		const {value} = tree;
		const maxBrunchSum = Math.max(maxChildBrunchSum + value, value);
		const maxRootNodeSum = Math.max(leftMaxBrunchSum + value + rightMaxBrunchSum, maxBrunchSum);
		const maxPathSum = Math.max(leftMaxPathSum, rightMaxPathSum, maxRootNodeSum);
		
		return [maxBrunchSum, maxPathSum]
	}
}