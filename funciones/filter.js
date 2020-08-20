/* filter :
El método filter() crea un nuevo array con todos los elementos que cumplan la condición implementada por la función dada.
El método filter() de Array.prototype nos permite filtrar solo los elementos que deseamos (segun ciertos criterios) y devolverlos en un nuevo array.

https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/filter
https://ed.team/blog/javascript-filtrar-elementos-de-un-array-con-filter
*/

//filter con objetos
console.log('****filter con objetos ****')
const customers = [
    { name: 'Andy', age: 29, occupation: 'sport'},
    { name: 'Juan', age: 30, occupation: 'dev'},
    { name: 'Pablo', age: 25, occupation: 'cheff'},
    { name: 'Tomas', age: 27, occupation: 'dev'},
    { name: 'Edw', age: 28, occupation: 'sport'},
]

const res = customers.filter(customer => {
    return customer.occupation == 'sport'
})
console.log(res)


// filter con array
console.log('****filter con array****')
const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
const result = words.filter(word => word.length < 6);
console.log(result);