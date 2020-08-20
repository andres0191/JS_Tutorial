/* Given a singly linked list of integers l and a non-negative integer n, move the last n list nodes to the beginning of the linked list.

Example

For l = [1, 2, 3, 4, 5] and n = 3, the output should be
rearrangeLastN(l, n) = [3, 4, 5, 1, 2]; */


function rearrangeLastN(l, n) {
    let list = JSON.stringify(l).match(/\-\d+|\d+/g);
    let arr = [], tt = [];
    if (list!==null&&list.length>0) {
        for (let i = 0; i < n; i++) tt.unshift(parseFloat(list.pop()));
        if (list.length>0) list.forEach(e => tt.push(parseFloat(e)));
        tt.forEach(e => arr.push(e));
    }    
    return arr;
}


console.log('****Test****')
const p = [1, 2, 3, 4, 5, 6, 7]
const r = 1
const q = rearrangeLastN(p, r)
console.log(q)