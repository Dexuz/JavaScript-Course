"use strict";

// Arrays, Arreglos, Matrices

var nombre = "Jordaly Castillo";
var nombres = [
  "Jordaly Castillo",
  "Juan Lopez",
  "Manolo Gracia",
  "Jose Martin",
  52,
  true
];

var lenguajes = new Array("PHP", "JS", "Java", "C#", "Pascal");

//Los index en la programacion enpiemza en el indice "0".

// console.log(nombre);
// console.log(nombre2);

//Accediendo a los indices de un array
//console.log(nombres[0]);

//Longitud de un array

// nombres.length; // 3 de elementos en el array

/* var elemento=parseInt(prompt("Cuál elemento quieres del array?",0));

if(elemento >= nombres.length){
    alert("Introduce un número correcto menor que "+nombres.length);
}else{
    alert("El usuario seleccionado es: "+nombres[elemento]);
}

 */

document.write("<h1>Lenguaje de programación del 2018</h1>");

//Manera clásica de recorrer un array

/* document.write("<ul>");
for (var i = 0; i < lenguajes.length; i++) {
  document.write("<li>" + lenguajes[i] + "</li>");
}
document.write("</ul>");
 */

//Nueva forma de recorrer un array

/* 
ForEach posee tres parametros:

1-Recoge todos los elementos del array
2-Muestra el indice de cada array
3-Muestra la colección de arreglos
*/

/* document.write("<ul>");
lenguajes.forEach((elemento, indice, array) => {
  console.log(array);
  document.write("<li>" + indice + " - " + elemento + "</li>");
});
document.write("</ul>"); */

//Recorrer un array con "For in":

/* document.write("<ul>");
for (let lenguaje in lenguajes) {
  document.write("<li>" + lenguaje + " - " + lenguajes[lenguaje] + "</li>");
}
document.write("</ul>");
 */

//Recorrer un array con "while()":

/* var arr=["Hola1","Hola2","Hola3"];

var len = arr.length;
var i=0;
while (i<len) {
   ++i;
   console.log(arr[i-1]);
} */

//Busquedas en un array arr.find(callback function)

/* var busqueda = lenguajes.find(function(lenguaje){
  return lenguaje == "PHP";
}); */

/* Funciones de flechas (igual a lo anterior): */

//var busqueda = lenguajes.find(lenguaje => lenguaje == "PHP");
//console.log(busqueda); // Res: PHP


//Buscar el indice de los elementos de un array (arr.findIndex(callback function))

/* var busqueda2 = lenguajes.findIndex(lenguaje => lenguaje == "PHP"); // 
console.log(busqueda2); // Res: 0 */

var precios=[10,20,50,12];

var busqueda = precios.some(precio => precio >= 20); // Existen valores igual o mayor que 20?
console.log(busqueda); //true 
