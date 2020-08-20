/* Given a singly linked list of integers l and an integer k, remove all elements from list l that have a value equal to k.

Example

For l = [3, 1, 2, 3, 4, 5] and k = 3, the output should be
removeKFromList(l, k) = [1, 2, 4, 5]; */

function removeKFromList(root, k) {
    let curr = root;
    let prev = null;
    while (curr != null) {
        if (curr.value == k) {
            if (curr == root) root = root.next;
            else {
                prev.next = curr.next;
            }
            curr = curr.next;
        }
        else {
            prev = curr;
            curr = curr.next;
        }
    }
    return root;
}

console.log('****Test****')
const p = [3, 1, 2, 3, 4, 5]
const r = 3
const q = removeKFromList(p, r)
console.log(q)
