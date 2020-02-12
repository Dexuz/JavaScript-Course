"use strict";

//Los arrays multi-dimensionales

var categorias = ["Action", "Terror", "comedias"];
var peliculas = ["La verdad duele", "La vida es bella", "Gran Torino"];

//Ordenar un array con el metodo sort()

//peliculas.sort();

// Orden inverso de un array
//peliculas.reverse();


var cine = [categorias, peliculas];

// console.log(cine[0][1]);
// console.log([1][2]);

//Recorriendo un array multi-dimensional

/* cine.forEach(function(imprime){
   alert(imprime+"\n");
});
 */

// Añadir un nuevo elemento al array - .push method

/*
var elemento = "";

 do {
  elemento = prompt("Introduce tu pelicula"); // Prompt devuelve "null" cuando no se ingresa datos
  peliculas.push(elemento);
  if (elemento == null || elemento == "") {
    peliculas.pop();
  }
} while (elemento != "a"); */

//peliculas.pop(); // Elimina el último elemento de un array


// Eliminar o agregar cualquier elemento de un array con .splice(a,b,c)
/* arr.splice(a,b,c)  Parametro (a) indica el index en donde se agregará o se eliminará el elem.
                      Parametro (b) indica cuantos elementos se eliminarán
                      Parametro (c) indica el/los elemento(s) que se agregará(n).                
 */
//var indice=peliculas.indexOf("Gran Torino");
//peliculas.splice(indice,1);

//El método join() une todos los elementos de una matriz (o un objeto similar a una matriz) en una cadena de texto y devuelve un string.

//console.log(peliculas.join(", ")); //elem.join(""),elem.join("-"),elem.join("  "),(También nos sirve como separador)

//El metodo split() convierte un cadena de texto en array. Posee dos parámetros: 1) split method; 2) un entero que specifica el # de splits

// var cadena="texto1- texto2- texto3";
// var cadena_array=cadena.split("- ");

// console.log(cadena_array);
