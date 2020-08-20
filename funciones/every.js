/*  https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/every

Determina si todos los elementos en el array satisfacen una condición.
*/


const isBelowThreshold = (currentValue) => currentValue < 40;

const array1 = [1, 30, 39, 29, 10, 13];

console.log(array1.every(isBelowThreshold));
// expected output: true