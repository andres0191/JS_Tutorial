/*  Given a linked list l, reverse its nodes k at a time and return the modified list. k is a positive integer that is less than or equal to the length of l. If the number of nodes in the linked list is not a multiple of k, then the nodes that are left out at the end should remain as-is.

You may not alter the values in the nodes - only the nodes themselves can be changed.

Example

For l = [1, 2, 3, 4, 5] and k = 2, the output should be
reverseNodesInKGroups(l, k) = [2, 1, 4, 3, 5];*/

function ListNode(x) {
    this.value = x;
    this.next = null;
}
  
function reverseNodesInKGroups(l, k) {
    let current = l; let list = []; let ans = [];
    while (current) {
        for (let i=0; i<k; i++) {
            list.push(current.value);
            current = current.next;
            if (!current){
                break;
            }
      } if (list.length < k) {
          ans = ans.concat(list)
      } else {
          ans = ans.concat(list.reverse())
      } list = []
    } return ans;
}

console.log('****Test****')
const p = [1, 2, 3, 4, 5]
const r = 2
const q = reverseNodesInKGroups(p, r)
console.log(q)