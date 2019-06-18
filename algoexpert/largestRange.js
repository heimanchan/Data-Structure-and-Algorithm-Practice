function largestRange(array) {
	let hashMap = {};
	let result = [];
	let range = 0;
	
	for (const num of array) {
		hashMap[num] = true;
	}
	
	for (const num of array) {
		if (hashMap[num] === false) continue;
		
		hashMap[num] = false;
		let currLength = 1;
		let left = num - 1;
		let right = num + 1;
		
		while (left in hashMap) {
			hashMap[left--] = false;
			currLength++;
		}
		
		while (right in hashMap) {
			hashMap[right++] = false;
			currLength++;
		}
		
		if (currLength > range) {
			range = currLength;
			result = [left+1, right-1];
		}
	}
	
	return result;
}