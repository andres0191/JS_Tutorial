/* A cryptarithm is a mathematical puzzle for which the goal is to find the correspondence between letters and digits, such that the given arithmetic equation consisting of letters holds true when the letters are converted to digits.

You have an array of strings crypt, the cryptarithm, and an an array containing the mapping of letters and digits, solution. The array crypt will contain three non-empty strings that follow the structure: [word1, word2, word3], which should be interpreted as the word1 + word2 = word3 cryptarithm.

If crypt, when it is decoded by replacing all of the letters in the cryptarithm with digits using the mapping in solution, becomes a valid arithmetic equation containing no numbers with leading zeroes, the answer is true. If it does not become a valid arithmetic solution, the answer is false.

Note that number 0 doesn't contain leading zeroes (while for example 00 or 0123 do).

Example

For crypt = ["SEND", "MORE", "MONEY"] and

solution = [['O', '0'],
            ['M', '1'],
            ['Y', '2'],
            ['E', '5'],
            ['N', '6'],
            ['D', '7'],
            ['R', '8'],
            ['S', '9']]
the output should be
isCryptSolution(crypt, solution) = true.  */

function hasLeadingZeros(s) {
    return s.length > 1 && s[0] == '0';
}

function isCryptSolution(crypt, solution) {
    let m = new Map(solution);
    let [w1, w2, w3] = crypt.map(w => Array.from(w).map(l => m.get(l)).join(''));
    
    return (
        !hasLeadingZeros(w1) &&
        !hasLeadingZeros(w2) &&
        !hasLeadingZeros(w3) &&
        parseInt(w1) + parseInt(w2) == parseInt(w3)
    )
}


const p = 
["ONE", 
"ONE", 
"TWO"]
const q = isCryptSolution(p)
console.log(q)