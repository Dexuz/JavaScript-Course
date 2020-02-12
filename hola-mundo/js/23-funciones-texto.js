"use strict"
// Transformación de texo

// var numero=44;
// var texto1="Bienvenido al cursio de JS de Victor Robles";
// var texto2="el cual es muy bueno";

// var dato=numero.toString();
    //dato=texto1.toUpperCase();
    //dato=dato.toLowerCase();

// console.log(dato); // string

// var nombre='Jordaly';

// console.log(nombre.length);

// concatenar - unir texto

// var textoTotal=texto1+", "+texto2;
// console.log(textoTotal);

// var textoTotal2=texto1.concat(", "+texto2);
// console.log(textoTotal2);

var numero=44;
var texto1="Bienvenido al curso de JS de Victor Robles ";
var texto2="el cual es muy bueno";

var busqueda=texto1.indexOf('curso');
var busqueda2=texto1.lastIndexOf('Robles');
var busqueda3=texto1.search('al');

var busqueda4=texto1.match('JS'); // Devuelve un array
var busqueda5=texto1.match(/e/gi); // Devuelve un array con todas las considencias

var busqueda6=texto1.substr(14,5); //Apartir del caracter 14, devuelveme 5 caracteres en adelante
var busqueda7=texto1.charAt(0);  // Devuelve una letra en concreto
var busqueda8=texto1.startsWith("Bi"); // devuelve true or false si el str empieza con Bi o no.
var busqueda9=texto1.endsWith("Robles"); // devuelve true or false si el str termina con Robles o no.
var busqueda10=texto1.includes("Robles"); // devuelve true or false si el str se incluye en el texto
var busqueda11=texto1.replace("JS","Synfony"); // reemplazar texto po otros.
var busqueda12=texto1.slice(14); // Elimina todos los caracteres del 14 hacia atras. Cortar del 14 al 22 .slice(14,22);
var busqueda13=texto1.split(" "); //Separar cadena de texto con un spacio " ", una coma "," o una lo que sea e introducirlos en un array.
var busqueda14=texto1.trim(); // quitar los espacios hay detras y por delante.

// console.log(busqueda);
// console.log(busqueda2);
// console.log(busqueda3);
// console.log(busqueda4);
// console.log(busqueda5);
// console.log(busqueda6);
// console.log(busqueda7);
// console.log(busqueda8);
// console.log(busqueda9);
// console.log(busqueda10);
// console.log(busqueda11);
// console.log(busqueda13);
// console.log(busqueda14);








