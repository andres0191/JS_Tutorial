/*
https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Map/has 
 
El método has() devuelve un booleano indicando si el elemento con la llave especificada existe o no.
*/

const map1 = new Map();
map1.set('bar', 'foo');

console.log(map1.has('bar'));
// expected output: true

console.log(map1.has('baz'));
// expected output: false
