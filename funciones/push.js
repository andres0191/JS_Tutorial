/* 
El método push() añade uno o más elementos al final de un array y devuelve la nueva longitud del array.

https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/push
*/

const animals = ['pigs', 'goats', 'sheep'];

const count = animals.push('cows');
console.log(count);
// expected output: 4
console.log(animals);
// expected output: Array ["pigs", "goats", "sheep", "cows"]

animals.push('chickens', 'cats', 'dogs');
console.log(animals);
// expected output: Array ["pigs", "goats", "sheep", "cows", "chickens", "cats", "dogs"]