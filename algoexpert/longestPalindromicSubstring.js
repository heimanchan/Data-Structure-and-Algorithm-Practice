function longestPalindromicSubstring(string) {
	let currLongest = [0, 1];
	for (let i = 1; i < string.length; i++) {
		let odd = getLongestFrom(i - 1, i + 1);
		let even = getLongestFrom(i - 1, i);
		let longest = odd[1] - odd[0] > even[1] - even[0] ? odd : even;
		currLongest = currLongest[1] - currLongest[0] > longest[1] - longest[0] ? currLongest : longest;
	}
	
	return string.slice(currLongest[0], currLongest[1]);
	
	function getLongestFrom(left, right) {
		while(left >= 0 && right < string.length) {
			if (string[left] !== string[right]) break;
			left--;
			right++;
		}
		
		return [left+1, right];
	}
}