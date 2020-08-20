/* El método pop() elimina el último elemento de un array y lo devuelve. Este método cambia la longitud del array.

https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/pop
*/

const plants = ['broccoli', 'cauliflower', 'cabbage', 'kale', 'tomato'];

console.log(plants.pop());
// expected output: "tomato"

console.log(plants);
// expected output: Array ["broccoli", "cauliflower", "cabbage", "kale"]

plants.pop();

console.log(plants);
// expected output: Array ["broccoli", "cauliflower", "cabbage"]