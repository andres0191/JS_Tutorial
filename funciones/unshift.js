/* 
https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/unshift

El método unshift() agrega uno o más elementos al inicio del array, y devuelve la nueva longitud del array.
*/

const array1 = [1, 2, 3];

console.log(array1.unshift(4, 5));
// expected output: 5

console.log(array1);
// expected output: Array [4, 5, 1, 2, 3]