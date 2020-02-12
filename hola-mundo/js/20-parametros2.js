"use strict";

//Parámetros de REST y SPREAD

/* REST:recoge todos los datos no incluido en los parametros, E.g.: "...resto_de_frutas" en el 4to
        parámetro de la función "listadoFrutas" compila en un array/arreglo el resto de las frutas 
        no definidas como parámetros preestablecidos. (Hace lo inverso de SPREAD)
 */



function listadoFrutas(fruta1, fruta2,fruta3, ...resto_de_frutas) {
    console.log("Fruta 1: ", fruta1);
    console.log("Fruta 2: ", fruta2);
    console.log("Fruta 3: ", fruta3);
    console.log("Fruta 3: ", resto_de_frutas);
    
}

/* 
   SPREAD: este se encarga de simular que un array/arreglo pase a ser numerado como lista en los
            parámetros de una función, es decir, hace lo inverso de REST.
*/

var frutas=["Naranja","Manzana","Limon","Chinola"];
listadoFrutas(...frutas,"Sandia","Pera","Melon","Coco"); 