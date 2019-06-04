function quickSort(array) {
  helper(array, 0, array.length - 1)
	return array;
}

function helper(array, start, end) {
	if (start >= end) return;
	
	const pivot = start;
	let left = pivot + 1;
	let right = end;
	while (right >= left) {
		if (array[left] > array[pivot] && array[right] < array[pivot]) {
			[array[left], array[right]] = [array[right], array[left]];
		}
		if (array[left] <= array[pivot]) left++;
		if (array[right] >= array[pivot]) right--;
	}
	
	[array[pivot], array[right]] = [array[right], array[pivot]];
	const leftIsSmaller = right - 1 - start < end - right + 1;
	if (leftIsSmaller) {
		helper(array, start, right - 1);
		helper(array, right + 1, end);
	} else {
		helper(array, right + 1, end);
		helper(array, start, right - 1);
	}
}