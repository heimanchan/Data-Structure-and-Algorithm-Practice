function findLoop(head) {
	let slow = head.next;
	let fast = head.next.next;
	while (slow !== fast) {
		slow = slow.next;
		fast = fast.next.next;
		if (slow === fast) {
			slow = head;
			while (slow !== fast) {
				slow = slow.next;
				fast = fast.next;
			}
		}
	}
	
	return slow
}