/* Given a string s consisting of small English letters, find and return the first instance of a non-repeating character in it. If there is no such character, return '_'.

Example

For s = "abacabad", the output should be
firstNotRepeatingCharacter(s) = 'c'. */

function firstNotRepeatingCharacter(s) {
    // create an empty Map object;
    const stringMap = new Map();  
    // iterate over characters of s and add to Map if char doesn't exist.
    // increment it's corresponding value if char exists.
    for (char of s){
      if (stringMap.has(char)){
        stringMap.set(char, stringMap.get(char) + 1)
        /* console.log(stringMap) */
      } else {
        stringMap.set(char, 1);
        /* console.log('holi', stringMap) */
      }
    };  
    // iterate over Map; and find the first key with value === 1;
    for (let [key, value] of stringMap){
      console.log([key, value])
      if (value === 1){
        return key;
      }
    }
    return '_';
}

console.log('****Test****')
const p = 'abacdfvfcdaba'
const q = firstNotRepeatingCharacter(p)
console.log(q)