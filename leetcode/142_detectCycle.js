const detectCycle = function(head) {
  if (!head) return null;
  
  let slow = fast = head;
  
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
    if (slow === fast) {
      slow = head;
      while (slow !== fast) {
        slow = slow.next;
        fast = fast.next;
      }
      return slow
    }
  }
  return null
};