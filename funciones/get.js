/* 
https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Map/get

El método get() devuelve un elemento específico de un objeto Map.*/

const map1 = new Map();
map1.set('bar', 'foo');

console.log(map1.get('bar'));
// expected output: "foo"

console.log(map1.get('baz'));
// expected output: undefined