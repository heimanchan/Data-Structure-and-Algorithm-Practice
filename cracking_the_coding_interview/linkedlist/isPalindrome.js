const ListNode = require("./listNode");

function isPalindrome(head) {
  let stack = [];
  let node = head;

  while (node) {
    stack.push(node);
    node = node.next;
  }

  let reversedList = new ListNode(stack.pop().value);
  let reverseNode = reversedList;
  while (stack.length) {
    reverseNode.next = stack.pop();
    reverseNode = reverseNode.next;
  }
  reverseNode.next = null;

  while (head && reversedList) {
    if (head.value !== reversedList.value) {
      return false;
    } else {
      head = head.next;
      reversedList = reversedList.next;
    }
  }

  return true;
}

const head = new ListNode("A")
const node1 = new ListNode("B")
const node2 = new ListNode("C")
const node3 = new ListNode("B")
const node4 = new ListNode("A")

head.next = node1;
node1.next = node2;
node2.next = node3;
node3.next = node4;

const head2 = new ListNode("B")
head2.next = node1;

console.log(isPalindrome(head)); // => True;
console.log(isPalindrome(head2)); // => False;

