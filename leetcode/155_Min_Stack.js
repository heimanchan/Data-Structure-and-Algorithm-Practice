class MinStack {
  constructor() {
    this.stack = [];
  }
  
  push(x) {
    let min;
    if (!this.stack.length) {
      min = x;
    } else {
      min = Math.min(this.getMin(), x)  
    }

    this.stack.push([x, min]);
  }
  
  pop() {
    this.stack.pop();
  }
  
  top() {
    return this.stack[this.stack.length - 1][0];
  }
  
  getMin() {
    return this.stack[this.stack.length - 1][1];
  }
}