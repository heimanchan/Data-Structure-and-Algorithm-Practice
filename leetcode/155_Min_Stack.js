class MinStack {
  constructor() {
    this.stack = [];
  }

  push(val) {
    if (!this.stack.length) {
      this.stack.push([val, val])
    } else if (val < this.getMin()) {
      this.stack.push([val, val])
    } else {
      this.stack.push([val, this.getMin()])
    }
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