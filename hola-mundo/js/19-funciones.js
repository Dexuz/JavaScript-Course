"use strict";

// Funciones

// Una funcion es un conjunto de instruciones reutilizable

function porConsola(numero1, numero2) {
  console.log("Suma: " + (numero1 + numero2));
  console.log("Resta: " + (numero1 - numero2));
  console.log("Multiplicación: " + numero1 * numero2);
  console.log("Suma: " + numero1 / numero2);
  console.log("*******************************");
}

function porPantalla(numero1, numero2) {
  document.write("Suma: " + (numero1 + numero2) + "<br>");
  document.write("Resta: " + (numero1 - numero2) + "<br>");
  document.write("Multiplicación: " + numero1 * numero2 + "<br>");
  document.write("Suma: " + numero1 / numero2 + "<br>");
  document.write("*******************************");
}

function calculadora(numero1, numero2, mostrar = false) {
  // mostrar es un parámetro opcional
  //return "Hola soy la calculadora!!";

  //Conjunto de instrucciones a ejecurar
  /* console.log("Hola soy la calculadora!!");
    console.log("Sí, soy yo"); */
  //return "Hola, he aquí la calculadora otra vez";

  if (mostrar == false) {
    porConsola(numero1, numero2);
  } else {
    porPantalla(numero1, numero2);
  }
  
}

//invocar o llamar a la función
/* var resultado = calculadora();
console.log(resultado); */

/* for(var i=1;i<=10;i++){
  console.log("Iteración # "+i);
  calculadora(i,8);
} */
calculadora(1, 40); // Los parámetro son obligatorios
calculadora(1, 45, true); // En este caso, el 3er parámetro es opcional ya que que se ha pre-establecido como "false".
