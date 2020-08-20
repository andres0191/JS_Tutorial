/* Note: Your solution should have O(l1.length + l2.length) time complexity, since this is what you will be asked to accomplish in an interview.

Given two singly linked lists sorted in non-decreasing order, your task is to merge them. In other words, return a singly linked list, also sorted in non-decreasing order, that contains the elements from both original lists.

Example

For l1 = [1, 2, 3] and l2 = [4, 5, 6], the output should be
mergeTwoLinkedLists(l1, l2) = [1, 2, 3, 4, 5, 6]; */

function ListNode(x) {
    this.value = x;
    this.next = null;
}
function mergeTwoLinkedLists(l1, l2) {
    const l1Arr = JSON.stringify(l1).match(/-?\d+/g) || [],
          l2Arr = JSON.stringify(l2).match(/-?\d+/g) || [],
          concat = l1Arr.concat(l2Arr).sort((a,b) => a-b),
          result = []; 
    concat.forEach(elm => result.push(elm*1))
    return result 
  }
console.log('****Test****')
const p = [1, 2, 3]
const r = [4, 5, 6]
const q = mergeTwoLinkedLists(p, r)
console.log(q)