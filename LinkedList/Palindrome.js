/* Given a singly linked list of integers, determine whether or not it's a palindrome.

Note: in examples below and tests preview linked lists are presented as arrays just for simplicity of visualization: in real data you will be given a head node l of the linked list

Example

For l = [0, 1, 0], the output should be
isListPalindrome(l) = true; */

function isListPalindrome(l) {
    var s = []
    while (l) {
        s.push(l.value)
        l = l.next
    }
    
    return s + "" === s.reverse() + ''
}

console.log('****Test****')
const p = [0, 1, 0]
const q = isListPalindrome(p)
console.log(q)