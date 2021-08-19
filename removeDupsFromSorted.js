const removeDupsFromSorted = (head) => {
    
    // for (let i = 0; i < head.length; i++){
    //     if (head[i] === head[i+1]){
    //         head.splice(i,1)
    //     }
    // }
    // return head

    var now = head;
    while (now) {
      if (now.next && now.next.val === now.val) {
        now.next = now.next.next;
      } else {
        now = now.next;
      }
    }
    return head;
}

const head = [1,1,2,3,3]
console.log(removeDupsFromSorted(head))