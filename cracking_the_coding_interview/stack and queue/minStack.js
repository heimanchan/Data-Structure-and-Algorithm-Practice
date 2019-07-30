class MinStack {
  constructor() {
    this.stack = [];
  }

  push(val) {
    if (!this.stack.length) { //when the stack is empty
      this.stack.push([val, val])
    } else {  //when its not empty, i.e. we have a value of min
      if (val < this.min()) {
        this.stack.push([val, val])
      } else {
        this.stack.push([val, this.min()])
      }
    }

    console.log(this.stack)
  }

  pop() {
    this.stack.pop();
  }

  min() {
    let n = this.stack.length;
    
    return this.stack[n-1][1];
  }
}

let stack = new MinStack;
stack.push(1)
console.log(stack.min());
stack.push(2)
stack.push(0)
console.log(stack.min());
stack.pop();
console.log(stack.min());
stack.push(3)
console.log(stack.min());
