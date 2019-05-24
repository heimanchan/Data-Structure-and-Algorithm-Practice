function removeKthNodeFromEnd(head, k) {
	let count = 0;
	let node = head;
	while(node) {
		count++;
		node = node.next;
	}

	if (k === count) {
		head.value = head.next.value
		head.next = head.next.next;
	} else {
		node = head;
		target = count - k;
		count = 0;
		while(node) {
			if (++count === target) {
				node.next = node.next.next;
			} else {
				node = node.next;
			}
		}
	}
}