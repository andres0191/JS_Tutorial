/* Note: Try to solve this task in-place (with O(1) additional memory), since this is what you'll be asked to do during an interview.

You are given an n x n 2D matrix that represents an image. Rotate the image by 90 degrees (clockwise).

Example

For

a = [[1, 2, 3],
     [4, 5, 6],
     [7, 8, 9]]
the output should be

rotateImage(a) =
    [[7, 4, 1],
     [8, 5, 2],
     [9, 6, 3]] */

function rotateImage(a) {
    const N = a.length - 1;   // use a constant
    // use arrow functions and nested map;
    const result = a.map((row, i) => {
        row.map((val, j) => a[N - j][i])
    });
    a.length = 0;       // hold original array reference
    a.push(...result);  // Spread operator
    return a;

}

console.log('****Test****')
const p =  [[1],[2]]
const q = rotateImage(p)
console.log(q)