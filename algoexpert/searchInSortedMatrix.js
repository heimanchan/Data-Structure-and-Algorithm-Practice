function searchInSortedMatrix(matrix, target) {
	let row = 0;
	let col = matrix[0].length - 1;
	
	while (row < matrix.length && col >= 0) {
		if (matrix[row][col] === target) {
			return [row, col];
		}
		
		if (matrix[row][col] > target) {
			col--;
		}else if (matrix[row][col] < target) {
			row++;
		}
	}
	
	return [-1, -1]
}