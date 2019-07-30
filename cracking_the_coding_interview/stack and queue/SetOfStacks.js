class SetOfStacks {
  constructor(limit) {
    this.stacks = [];
    this.limit = limit;
  }

  push(val) {
    if (!this.stacks.length) {
      this.stacks.push([val]);
    } else {
      if (this.lastStack().length < this.limit) {
        this.lastStack().push(val);
      } else {
        this.stacks.push([val]);
      }
    }
  }

  pop() {
    if (this.lastStack().length === 0) {
      this.stacks.pop();
    }

    return this.lastStack().pop();
  }

  peek() {
    if (this.lastStack().length === 0) {
      this.stacks.pop();
    }

    return this.lastStack()[this.lastStack().length - 1];
  }

  lastStack() {
    return this.stacks[this.stacks.length - 1];
  }
}

let test = new SetOfStacks(2);
test.push(1)
test.push(2)
test.push(0)
test.push(3)
console.log(test.peek()); // 3
test.pop(); 
console.log(test.peek()); // 0
test.pop();
console.log(test.stacks)
console.log(test.peek()); // 2
console.log(test.stacks)

