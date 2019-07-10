var addTwoNumbers = function(l1, l2) {  
  let c1 = l1;
  let c2 = l2;
  let result = new ListNode(0);
  let dummy = result;
  let sum = 0;
  
  while (c1 || c2) {
    sum = Math.floor(sum / 10);
    
    if (c1) {
      sum += c1.val;
      c1 = c1.next;
    }
    
    if (c2) {
      sum += c2.val;
      c2 = c2.next;
    }
    
    dummy.next = new ListNode(sum % 10);
    dummy = dummy.next;
  }
  
  if (Math.floor(sum / 10) === 1) dummy.next = new ListNode(1);
  
  return result.next;
}