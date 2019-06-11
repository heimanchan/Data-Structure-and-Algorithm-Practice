const ListNode = require("./listNode");

function isPalindrome(head) {
  const stack = [];
  let fast = slow = head;

  while (fast && fast.next) {
    stack.push(slow.value);
    slow = slow.next;
    fast = fast.next.next;
  }

  // odd number of elements
  if (fast !== null) {
    slow = slow.next;
  }

  while (slow !== null) {
    if (slow.value !== stack.pop()) {
      return false
    }
    slow = slow.next;
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

