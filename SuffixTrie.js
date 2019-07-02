class SuffixTrie {
  constructor(string) {
    this.root = {};
    this.endSymbol = "*";
    this.populateSuffixTrieFrom(string);
  }

  populateSuffixTrieFrom(string) {
		for (let i = 0; i < string.length; i++) {
			this.insertSubStringStartingAt(i, string);
		}
  }

	insertSubStringStartingAt(i, string) {
		let node = this.root;
		
		for (let j = i; j < string.length; j++) {
			const ch = string[j];
			
			if (!node.hasOwnProperty(ch)) node[ch] = {};
			node = node[ch];
		}
		
		node[this.endSymbol] = true;
	}
	
  contains(string) {
    // Write your code here.
		let node = this.root;
		
		for (const ch of string) {
			if (!node.hasOwnProperty(ch)) return false;
			
			node = node[ch];
		}
		
		return node.hasOwnProperty(this.endSymbol);
  }
}