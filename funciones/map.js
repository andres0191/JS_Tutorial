/* map:
El método map() crea un nuevo array con los resultados de la llamada a la función indicada aplicados a cada uno de sus elementos.


https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/map
*/

console.log('****map con objetos ****')
const customers = [
    { name: 'Andy', age: 29, occupation: 'sport'},
    { name: 'Juan', age: 30, occupation: 'dev'},
    { name: 'Pablo', age: 25, occupation: 'cheff'},
    { name: 'Tomas', age: 27, occupation: 'dev'},
    { name: 'Edw', age: 28, occupation: 'sport'},
];

const res = customers.map(customer => {
    const agedouble = customer;
    agedouble.age = customer.age * 2;
    return(customer.age)
})
console.log(res)

console.log('****map con array ****')
var numbers = [1, 5, 10, 15]; var number2 = [];
var doubles = numbers.map(function(x) {
    number2.push(x * 2)
});
console.log(number2);


/* conat in the all array  */

console.log('******concat in the array*******')

function addEnding(arr, ending) {
	return(arr.map((x => x.concat(ending))))
}

const array6 = ['clever', 'meek', 'hurried', 'nice']
const ending = 'ly'
const adda=addEnding(array6, ending)
console.log(adda)