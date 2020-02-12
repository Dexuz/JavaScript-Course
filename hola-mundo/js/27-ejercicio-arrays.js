"use strict";

/* 
1. Programa que pide seis números por pantalla y los meta en un array.
2. Mostrar el array enteo (todos sus elementos) en el cuerpo de la pagina y en la consola.
3. Ordenar el array y mostrarlo.
4. Invertir el orden y mostrar
5. Mostrar cuantos elementos tiene el array
6. Busqueda de un valor introducido por el usuario, que nos diga si lo encuentra en el array y decir su pocisión (indice)
 */

function mostarArray(elementos, textoCustom = "") {
  document.write("<h1>Contenido del array " + textoCustom + "</h1>");
  document.write("<ul>");
  elementos.forEach(function(elemento, index) {
    document.write("<li>" + elemento + "</li>");
  });
  document.write("</ul>");
}

//var numeros = new Array(6);

// Pedir seis numeros
var numeros = [];

for (var i = 0; i <= 5; i++) {
  //numeros[i]=parseInt(prompt("Introduce un número",0));
  var datos = parseInt(prompt("Introduce un número", 0));
  numeros.push(datos);
}

//Mostrar en el cuerpo de la pagina

mostarArray(numeros);

//Mostrar arary por la consola
console.log(numeros);

//Ordenar el array y mostrarlo.

numeros.sort((a, b) => a - b);
console.log(numeros);
mostarArray(numeros, "ordenados");

//ivertir y mostrar

numeros.reverse();
console.log(numeros);
mostarArray(numeros, "revertidos");

//Cuantos elementos tiene el array

document.write("<h1> El array tiene " + numeros.length + " elementos</h1>");

//Busqueda

var busqueda = parseInt(prompt("Busca un número", 0));

var posicion = numeros.findIndex(numero => numero == busqueda);

if(posicion && posicion != -1){
  document.write("<hr><h1>ENCONTRADO</h1>");
  document.write("<h1>Posición de la busquerda: "+posicion+"</h1><hr>");
}else{
  document.write("<hr><h1>NO ENCONTRADO</h1><hr>");
}
