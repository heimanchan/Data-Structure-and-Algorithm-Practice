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

// def add_two_numbers(l1, l2)
//   node1 = l1
//   node2 = l2
//   sum = 0
//   result = ListNode.new(0)
//   dummy = result

//   while (node1 != nil || node2 != nil)
//     sum /= 10

//   if (node1 != nil)
//     sum += node1.val
//   node1 = node1.next
//   end

//   if (node2 != nil)
//     sum += node2.val
//   node2 = node2.next
//   end

//   dummy.next = ListNode.new(sum % 10)
//   dummy = dummy.next
//   end

//   dummy.next = ListNode.new(1) if (sum / 10 == 1)
//   result.next
// end