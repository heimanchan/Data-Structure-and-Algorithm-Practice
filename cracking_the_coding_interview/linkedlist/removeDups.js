const ListNode = require('./listNode')

// If no buffer is allowed, we have to do it in O(n^2) time with two pointers,
// where the second pointer checks all subsequent nodes for duplicates.

// O(n) time and space complexity as below
function removeDups(head) {
  let hashMap = new Map();
  hashMap.set(head.value)

  let node = head;
  while (node && node.next !== null) {
    const nextNode = node.next;
    if (hashMap.has(nextNode.value)) {
      node.next = nextNode.next;
    } else {
      hashMap.set(nextNode.value)
    }

    node = node.next;
  }

  return head;
}

const head = new ListNode("A")
const node1 = new ListNode("B")
const node2 = new ListNode("A")
const node3 = new ListNode("C")
const node4 = new ListNode("D")

head.next = node1;
node1.next = node2;
node2.next = node3;
node3.next = node4;

console.log(removeDups(head));