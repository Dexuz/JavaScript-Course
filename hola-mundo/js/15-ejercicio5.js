"use strict";

/* 
Muestre todos los números divisores de un número que se introduce en prompt.
*/

var numero = parseInt(prompt("Introduce el primer número", 0));

for (var i = 1; i <= numero; i++) {
  if (numero % i == 0) {
    console.log(i + " es divisor de " + numero);
  }
}
