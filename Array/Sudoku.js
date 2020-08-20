/* Sudoku is a number-placement puzzle. The objective is to fill a 9 × 9 grid with numbers in such a way that each column, each row, and each of the nine 3 × 3 sub-grids that compose the grid all contain all of the numbers from 1 to 9 one time.

Implement an algorithm that will check whether the given grid of numbers represents a valid Sudoku puzzle according to the layout rules described above. Note that the puzzle represented by grid does not have to be solvable.

Example

For

grid = [['.', '.', '.', '1', '4', '.', '.', '2', '.'],
        ['.', '.', '6', '.', '.', '.', '.', '.', '.'],
        ['.', '.', '.', '.', '.', '.', '.', '.', '.'],
        ['.', '.', '1', '.', '.', '.', '.', '.', '.'],
        ['.', '6', '7', '.', '.', '.', '.', '.', '9'],
        ['.', '.', '.', '.', '.', '.', '8', '1', '.'],
        ['.', '3', '.', '.', '.', '.', '.', '.', '6'],
        ['.', '.', '.', '.', '.', '7', '.', '.', '.'],
        ['.', '.', '.', '5', '.', '.', '.', '7', '.']]
the output should be
sudoku2(grid) = true;

For

grid = [['.', '.', '.', '.', '2', '.', '.', '9', '.'],
        ['.', '.', '.', '.', '6', '.', '.', '.', '.'],
        ['7', '1', '.', '.', '7', '5', '.', '.', '.'],
        ['.', '7', '.', '.', '.', '.', '.', '.', '.'],
        ['.', '.', '.', '.', '8', '3', '.', '.', '.'],
        ['.', '.', '8', '.', '.', '7', '.', '6', '.'],
        ['.', '.', '.', '.', '.', '2', '.', '.', '.'],
        ['.', '1', '.', '2', '.', '.', '.', '.', '.'],
        ['.', '2', '.', '.', '3', '.', '.', '.', '.']]
the output should be
sudoku2(grid) = false. */

function sudoku2(grid) {
    var collapsed = [[], [], []];
    //Guaranteed to be 9x9. Guaranteed to have '.' or 1-9
    for(var x = 0; x < grid.length; x++) {
        //Check row
        //grid[x][0-8]
        for(var i = 1; i <= 9; i++) {
            if(!isValid(i, grid[x].join(""))) { 
                return false;
            }
        }
        //Check column
        //grid[0-8][x]
        var column = [];
        for(var y = 0; y < grid.length; y++) {
            column.push(grid[y][x]);
            collapsed[(x % 3)].push(grid[x][y]);
        }
        
        for(var i = 1; i <= 9; i++) {
            if(!isValid(i, column.join(""))) { 
                return false;
            }
        }
    }
    
    //Check squares
    // grid[0-2][0-2], grid[0-2][3-5], grid[0-2][6-8]
    var squares = [[], [], [], [], [], [], [], [], []];
    var k = 0;
    while(k < 9) {
        for(var j = 0; j < 3; j++) {
            squares[k].push(collapsed[j].shift());
            squares[k].push(collapsed[j].shift());
            squares[k].push(collapsed[j].shift());
        }
        for(var i = 1; i <= 9; i++) {
            if(!isValid(i, squares[k].join(""))) { 
                return false;
            }
        }
       k++;
    }
   return true;
}
function isValid(i, a) {
    // No number is repeated
    var first = a.indexOf(i);
    if(first >= 0) {
        if(a.indexOf(i, first + 1) >= 0) {
            return false;
        }
    }
    return true;
}

console.log('****Test****')
const p =  
[[".",".",".",".","2",".",".","9","."], 
 [".",".",".",".","6",".",".",".","."], 
 ["7","1",".",".","7","5",".",".","."], 
 [".","7",".",".",".",".",".",".","."], 
 [".",".",".",".","8","3",".",".","."], 
 [".",".","8",".",".","7",".","6","."], 
 [".",".",".",".",".","2",".",".","."], 
 [".","1",".","2",".",".",".",".","."], 
 [".","2",".",".","3",".",".",".","."]]
const q = sudoku2(p)
console.log(q)

console.log('****Test 2****')
const r = 
[[".",".",".","1","4",".",".","2","."], 
[".",".","6",".",".",".",".",".","."], 
[".",".",".",".",".",".",".",".","."], 
[".",".","1",".",".",".",".",".","."], 
[".","6","7",".",".",".",".",".","9"], 
[".",".",".",".",".",".","8","1","."], 
[".","3",".",".",".",".",".",".","6"], 
[".",".",".",".",".","7",".",".","."], 
[".",".",".","5",".",".",".","7","."]]
const s = sudoku2(r)
console.log(s)