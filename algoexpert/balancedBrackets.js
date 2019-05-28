function balancedBrackets(string) {
	const stack = [];
	const map = {
		")" : "(",
		"]" : "[",
		"}" : "{"
	};
	
	for (let ch of string) {
		if (ch === "(" || ch === "[" || ch === "{") {
			stack.push(ch);
		}
		
		if (ch === ")" || ch === "]" || ch === "}") {
			if (stack.pop() !== map[ch]) return false;
		}
	}
	
	return stack.length === 0;
}