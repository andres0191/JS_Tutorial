/* 
https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/some

El método some() comprueba si al menos un elemento del array cumple con la condición implementada por la función proporcionada.
*/

const array = [1, 2, 3, 4, 5];

// checks whether an element is even
const even = (element) => element % 2 === 0;

console.log(array.some(even));
// expected output: true