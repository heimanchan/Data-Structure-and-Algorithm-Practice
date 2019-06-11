const ListNode = require('./listNode');

// Time: O(n), Space: O(1)
function kthToLast(head, k) {
  let p = q = head;

  for (let i = 0; i < k; i++) {
    if (p === null) return null;
    p = p.next;
  }

  while (p) {
    p = p.next;
    q = q.next;
  }

  return q
}

const head = new ListNode("A")
const node1 = new ListNode("B")
const node2 = new ListNode("C")
const node3 = new ListNode("D")
const node4 = new ListNode("E")

head.next = node1;
node1.next = node2;
node2.next = node3;
node3.next = node4;

console.log(kthToLast(head, 2)); // => return node 3 ("D")