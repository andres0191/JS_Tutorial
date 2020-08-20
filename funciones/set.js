/* 
https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Map/set

El método set() agrega un nuevo elemento al objeto Map con la llave y el valor especificado.
*/

var miMapa = new Map();

// Agregar nuevos elementos al mapa
miMapa.set("bar", "foo");
miMapa.set(1, "foobar");

// Actualizar un elemento en el mapa
miMapa.set("bar", "baz");