/* Reducer con objetos: El método reduce() aplica una función a un acumulador y a cada valor de una array (de izquierda a derecha) para reducirlo a un único valor.
https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/reduce
https://medium.com/@xadrijo/un-vistazo-a-la-funci%C3%B3n-reduce-en-javascript-f4459bc4e3aa
*/
console.log('****reducer con objetos ****')
const customers = [
    { name: 'Andy', age: 29, occupation: 'sport'},
    { name: 'Juan', age: 30, occupation: 'dev'},
    { name: 'Pablo', age: 25, occupation: 'cheff'},
    { name: 'Tomas', age: 27, occupation: 'dev'},
    { name: 'Edw', age: 28, occupation: 'sport'},
];

//Obtener la suma de las edades de todos

const sumedad = customers.reduce((age, customer) => {
    return (age + customer.age);
}, 0);

console.log(sumedad);

// reducer con array
console.log('****reducer con array ****')
function reducerarray(a){
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    return(a.reduce(reducer));
}

const x = [1, 2, 4, 5];
const p = reducerarray(x);
console.log(p);
