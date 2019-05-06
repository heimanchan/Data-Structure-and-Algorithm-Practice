// ============================================================================
// Implementation Exercise: Singly Linked List
// ============================================================================
//
// -------
// Prompt:
// -------
//
// Implement a Singly Linked List and all of its methods below!
//
// ------------
// Constraints:
// ------------
//
// Make sure the time and space complexity of each is equivalent to those 
// in the table provided in the Time and Space Complexity Analysis section
// of your Linked List reading!
//
// -----------
// Let's Code!
// -----------

// TODO: Implement a Linked List Node class here
class Node {
    constructor(val) {
      this.value = val;
      this.next = null;
    }

}

// TODO: Implement a Singly Linked List class here
class LinkedList {
    constructor() {
      this.head = null;
      this.tail = null;
      this.length = 0;
    }

    // TODO: Implement the addToTail method here
    addToTail(val) {
      let newNode = new Node(val);
      
      if (!this.head) {
        this.head = newNode;
        this.tail = newNode;
      } else {
        this.tail.next = newNode;
        this.tail = newNode;
      }
      
      this.length++;
      return this;
    }

    // TODO: Implement the removeTail method here
    removeTail() {
      if (!this.head) return undefined;

      if (this.length === 1) {
        this.head = this.tail = null;
      } else {
        let node = this.head;
        while (node.next !== this.tail) {
          node = node.next;
        }

        var temp = node.next;
        node.next = null;
        this.tail = node;
      }

      this.length--;
      return temp;
    }

    // TODO: Implement the addToHead method here
    addToHead(val) {
      let newNode = new Node(val);

      if (!this.head) {
        this.head = newNode;
        this.tail = newNode;
      } else {
        newNode.next = this.head;
        this.head = newNode;
      }

      this.length++;
      return this;
    }

    // TODO: Implement the removeHead method here
    removeHead() {
      if (!this.head) return undefined;
      let node = this.head;

      if (this.length === 1) {
        this.head = this.tail = null;
      } else {
        this.head = this.head.next;
      }

      this.length--;
      return node;
    }

    // TODO: Implement the contains method here
    contains(target) {
      if (!this.head) return false;

      let node = this.head;
      while (node) {
        if (node.value === target) {
          return true;
        } else {
          node = node.next;
        }
      }

      return false;
    }

    // TODO: Implement the get method here
    get(index) {
      if (index >= this.length) return null;

      let node = this.head;
      for (let i = 0; i < index; i++) {
        node = node.next;
      }

      return node;
    }

    // TODO: Implement the set method here
    set(index, val) {
      if (index >= this.length) return false;

      let node = this.head;
      for (let i = 0; i < index; i++) {
        node = node.next;
      }

      node.value = val;
      return true;
    }

    // TODO: Implement the insert method here
    insert(index, val) {
      if (index >= this.length) return false;

      let node = this.head;
      let newNode = new Node(val);
      for (let i = 0; i < index - 1; i++) {
        node = node.next;
      }

      let temp = node.next;
      node.next = newNode;
      newNode.next = temp;

      this.length++;
      return true;
    }

    // TODO: Implement the remove method here
    remove(index) {
      if (index >= this.length) return undefined;

      let node = this.head;
      for (let i = 0; i < index - 1; i++) {
        node = node.next;
      }

      let temp = node.next;
      node.next = node.next.next;

      this.length--;
      return temp;
    }

    // TODO: Implement the size method here
    size() {
      return this.length;
    }
}

exports.Node = Node;
exports.LinkedList = LinkedList;
