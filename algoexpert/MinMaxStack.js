class MinMaxStack {
	constructor() {
		this.stack = [];
	}
	
  peek() {
    return this.last()[0];
  }

  pop() {
		console.log(this.stack)
		return this.stack.pop()[0];
  }

  push(number) {
		if (!this.stack.length) {
			return this.stack.push([number, number, number]);
		}
		
		let arr = [number];
		let min = this.last()[1];
		let max = this.last()[2];
		arr.push(Math.min(min, number), Math.max(max,number));
   	this.stack.push(arr);
  }

	last() {
		return this.stack[this.stack.length-1];
	}
	
  getMin() {
    return this.last()[1];
  }

  getMax() {
		return this.last()[2];
  }
}
