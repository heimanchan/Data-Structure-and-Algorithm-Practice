function longestSubstringWithoutDuplication(string) {
	let hashMap = {};
	let startIdx = 0;
	let longest = [0, 1];
	
	for (let i = 0; i < string.length; i++) {
		const ch = string[i];
		
		if (ch in hashMap) {
			startIdx = Math.max(startIdx, hashMap[ch] + 1);
		}
		
		if (longest[1] - longest[0] < i+1 - startIdx) {
			longest = [startIdx, i+1]
		}
		
		hashMap[ch] = i;
	}
	
	return string.slice(longest[0], longest[1])
}