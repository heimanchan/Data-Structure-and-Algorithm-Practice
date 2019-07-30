class MyQueue {
  constructor() {
    this.stackNewestonTop = [];
    this.stackOldestonTop = [];
  }

  size() {
    return this.stackNewestonTop.length() + this.stackOldestonTop.length();
  }

  add(val) {
    this.stackNewestonTop.push(val);
  }

  shiftStacks() {
    if (this.stackOldestonTop.length === 0) {
      while (this.stackNewestonTop.length) {
        this.stackOldestonTop.push(this.stackNewestonTop.pop())
      }
    }
  }

  peek() {
    this.shiftStacks();
    return this.stackOldestonTop[0];
  }

  remove() {
    this.shiftStacks();
    return this.stackOldestonTop.pop();
  }
}

const test = new MyQueue;
test.add(1);
console.log(test.remove()); // 1
test.add(2);
test.add(3);
console.log(test.remove()); // 2
console.log(test.peek()); // 3
test.add(4)
test.add(5)
console.log(test.remove()); // 3
console.log(test.remove()); // 4
console.log(test.remove()); // 5
console.log(test.peek()); // undefined