/* You're given 2 huge integers represented by linked lists. Each linked list element is a number from 0 to 9999 that represents a number with exactly 4 digits. The represented number might have leading zeros. Your task is to add up these huge integers and return the result in the same format.

Example

For a = [9876, 5432, 1999] and b = [1, 8001], the output should be
addTwoHugeNumbers(a, b) = [9876, 5434, 0]. */

function addTwoHugeNumbers(a, b) {
    a = convert(a)
    b = convert(b)
    
    var longer = a.length > b.length ? a.length : b.length
    
    var sum = []
    var carry = 0
    
    for(i = 0; i < longer || carry; i++) {
       sum.push( ( (a[i] || 0) + (b[i] || 0) + carry ) % 10000 ) 
       carry = Math.floor( ( (a[i] || 0) + (b[i] || 0) + carry ) / 10000 )
       console.log(carry)
    }
    
    return sum.reverse()
 }
 
 function convert(list) {
  var tmpArray = []
  do {
    if(list) {
       tmpArray.push(list.value) 
     }
     list = list.next
  } while (list)
  return tmpArray.reverse()
 }

console.log('****Test****')
const p = [9876, 5432, 1999]
const r = [1, 8001]
const q = addTwoHugeNumbers(p, r)
console.log(q)