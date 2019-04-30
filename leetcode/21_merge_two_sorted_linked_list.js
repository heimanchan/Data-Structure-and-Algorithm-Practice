const mergeTwoLists = function(l1, l2) {
  let dummy = new ListNode(-1);
  let curr = dummy;

  while (l1 && l2) {
    if (l1.val < l2.val) {
      curr.next = new ListNode(l1.val);
      curr = curr.next;
      l1 = l1.next;
    } else {
      curr.next = new ListNode(l2.val);
      curr = curr.next;
      l2 = l2.next;
    }
  }
  
  if (l1) {
    curr.next = l1;
  } else {
    curr.next = l2;
  }
  
  return dummy.next
};