function smallestDifference(array1, array2) {
	array1 = array1.sort((a, b) => a - b);
	array2 = array2.sort((a, b) => a - b);
	let result = [];
	let p = q = 0;
	let smallest = Infinity;
	
	while (p < array1.length && q < array2.length) {
		let diff = Math.abs(array1[p] - array2[q]);
		
		if (diff < smallest) {
			smallest = diff;
			result = [array1[p], array2[q]];
		}
		
		if (array1[p] < array2[q]) {
			p++;
		} else if (array1[p] > array2[q]) {
			q++;
		} else { //num1 and num2 are equal, so their difference is 0, return ans
			return result;
		}
	}
	
	return result;
}