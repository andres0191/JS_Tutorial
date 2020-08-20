/* https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/sort

El método sort() ordena los elementos de unarreglo (array) localmente y devuelve el arreglo ordenado. La ordenación no es necesariamente estable. 
*/



var frutas = ['guindas', 'manzanas', 'bananas'];
frutas.sort(); // ['bananas', 'guindas', 'manzanas']

var puntos = [1, 10, 2, 21]; 
puntos.sort(); // [1, 10, 2, 21]
// Tenga en cuenta que 10 viene antes que 2
// porque '10' viene antes que '2' según la posición del valor Unicode.

var cosas = ['word', 'Word', '1 Word', '2 Words'];
cosas.sort(); // ['1 Word', '2 Words', 'Word', 'word']
// En Unicode, los números vienen antes que las letras mayúsculas
// y estas vienen antes que las letras minúsculas.

/* **** sort algorithms other form***** */
console.log('****sort algorithms max to min other form****')
function Maxnumber(arr){
    return (arr || []).sort((a, b) => b - a)
    
}

const array5 = [ 1, 7, -3, 4]
const res4 = Maxnumber(array5)
console.log(res4)


/* **** sort algorithms other form***** */
console.log('****sort algorithms min to max other form****')
function sortnumber(arr){
    return (arr || []).sort((a,b) => a - b)
    
}

const array4 = [ 1, 7, -3, 4]
const res3 = sortnumber(array4)
console.log(res3)