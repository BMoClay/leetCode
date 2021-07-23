var mergeTwoLists = function(l1, l2) {
    if (!l1)
        return l2;
    
    if (!l2)
        return l1;
    
    let list = new ListNode();
    let pointer = list;
    
    while (l1 && l2) {
        if (l1.val <= l2.val) {
            list.next = l1;
            l1 = l1.next
        } else {
            list.next = l2;
            l2 = l2.next;
        }
        
        list = list.next;
    }
    
    list.next = l1 || l2;
    return pointer.next;
};

let l1 = [1,2,4]
let l2 = [1,3,4]
console.log(mergeTwoLists(l1,l2))