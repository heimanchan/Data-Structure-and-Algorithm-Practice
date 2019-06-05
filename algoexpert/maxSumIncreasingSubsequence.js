function maxSumIncreasingSubsequence(array) {
	let sums = [...array];
	let sub = new Array(array.length);
	let maxSumIdx = 0;
	sums[0] = array[0];
	
	for (let i = 1; i < array.length; i++) {
		let curr = array[i];
		let currSum = curr;
		for (let j = 0; j < i; j++) {
			if (array[j] < curr && sums[j] + curr >= sums[i]) {
				sums[i] = sums[j] + curr;
				sub[i] = j;
			}
		}
		
		if (sums[i] >= sums[maxSumIdx]) maxSumIdx = i;
	}
	
	return [sums[maxSumIdx], makeSub(maxSumIdx)]
	function makeSub(idx) {
		let seq = [];
		
		while (array[idx]) {
			seq.unshift(array[idx]);
			idx = sub[idx];
		}
		
		return seq;
	}
}