/* https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/String/lastIndexOf

El  método lastIndexOf() devuelve la posicion (indice) en la que se encuentra el valorBusqueda, dentro del objeto String que realiza la llamada, de la última ocurrencia del valor especificado; o -1 si no se halla. La búsqueda se realiza empezando por el final de la cadena que realiza la llamada, empezando en indiceDesde. */

"canal".lastIndexOf("a")   // returns 3
"canal".lastIndexOf("a",2) // returns 1
"canal".lastIndexOf("a",0) // returns -1
"canal".lastIndexOf("x")   // returns -1
