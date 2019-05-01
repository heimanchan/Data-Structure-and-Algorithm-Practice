const isPalindrome = function(l) {
    var list = l;
    var count = 0;
    
    //get count
    while(list) {
        count += 1;
        list = list.next;
    }
    
    var midway = Math.floor(count / 2);
    
    //go to mid point and reverse list
    //save for comparison
    list = reverseSecondHalfLinkedList(l, midway);

    //compare reversed second half with first half
    var list1 = l;
    var start = 0;
    while(start < midway) {
        if(list1.val !== list.val) {
            reverseSecondHalfLinkedList(l, midway);
            return false;
        }
        list1 = list1.next;
        list = list.next;
        start += 1;
    }
    
    //go to mid point and reverse list
    reverseSecondHalfLinkedList(l, midway);
    
    return true;
};

const reverseSecondHalfLinkedList = function(l, midway) {
    var list = l;
    var count = 0;
    while(count < midway) {
        count += 1;
        list = list.next;
    }
    return reverseLinkedList(list);
}

const reverseLinkedList = function(list) {
    var current = list;
    var prev = null;
    
    while(current != null) {
        var next = current.next;
        current.next = prev;
        prev = current;
        current = next;
    }
    return prev;
}