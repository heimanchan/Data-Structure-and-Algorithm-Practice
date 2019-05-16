function caesarCipherEncryptor(string, key) {
	let alphabet = [..."abcdefghijklmnopqrstuvwxyz"];
	let result = "";
	
	for (let i = 0; i < string.length; i++) {
		let ch = string[i];
		let idx;
		if (key < 0) {
			idx = Math.abs(26 + key % 26)
		} else {
			idx = (alphabet.indexOf(ch) + key ) % 26;
		}
		result += alphabet[idx]
	}
	
	return result;
}