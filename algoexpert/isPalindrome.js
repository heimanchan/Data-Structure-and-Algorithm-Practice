function isPalindrome(string) {
	let p = 0, q = string.length - 1;
	
	while (p < q) {
		if (string[p] !== string[q]) {
			return false;
		} else {
			p++;
			q--;
		}
	}
	
	return true;
}