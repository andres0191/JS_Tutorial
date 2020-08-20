/* 
https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Set/forEach

El forEach()método ejecuta una función proporcionada una vez para cada valor en el Setobjeto, en orden de inserción.

*/


function logSetElements(value1, value2, set) {
    console.log(`s[${value1}] = ${value2}`);
  }
  
  new Set(['foo', 'bar', undefined]).forEach(logSetElements);
  
  // expected output: "s[foo] = foo"
  // expected output: "s[bar] = bar"
  // expected output: "s[undefined] = undefined"