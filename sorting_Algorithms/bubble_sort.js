/* arrow function */
console.log('********Bubble Sort function*********')
const smallarrfunction = (arr) => {
    for (var i = 0; i < arr.length; i++){
        for (var j = 0; j <= (arr.length); j++){
            var a = arr[j]
            var b = arr[j + 1]
            if (a > b){
                arr[j] = b
                arr[ j + 1] = a
            }console.log(arr)
        }
    }
}

const array3 = [1, 2, -1, 5, 3, 7, 9, 0, -2]
const res2 = smallarrfunction(array3)