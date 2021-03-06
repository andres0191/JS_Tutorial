/* Given an array a that contains only numbers in the range from 1 to a.length, find the first duplicate number for which the second occurrence has the minimal index. In other words, if there are more than 1 duplicated numbers, return the number for which the second occurrence has a smaller index than the second occurrence of the other number does. If there are no such elements, return -1.

Example

For a = [2, 1, 3, 5, 3, 2], the output should be firstDuplicate(a) = 3. */

function firstDuplicate(a) {
    var dictionary = {};
    for(var i = 0; i < a.length; i++) {
        if(dictionary[a[i]] !== undefined){
            return a[i];
        }else{
            dictionary[a[i]] = i;
        }
    }return -1;
}

console.log('****Test****')
const p = [2, 1, 3, 4, 2]
const q = firstDuplicate(p)
console.log(q)