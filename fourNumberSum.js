function fourNumberSum(array, targetSum) {
	let result = [];
	let hashMap = {};
	for (let i = 0; i < array.length - 1; i++) {
		for (let j = i + 1; j < array.length; j++) {
			const currSum = array[i] + array[j];
			const diff = targetSum - currSum;
			if (diff in hashMap) {
				for (let pair of hashMap[diff]) {
					result.push(pair.concat([array[i], array[j]]));
				}
			}
		}
		
		for (let k = 0; k < i; k++) {
			const pairSum = array[i] + array[k];
			if(!(pairSum in hashMap)) {
				hashMap[pairSum] = [[array[k], array[i]]];
			} else {
				hashMap[pairSum].push([array[k], array[i]])
			}
		}
	}

	return result;
}