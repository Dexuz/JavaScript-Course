'use strict'
/*
utilizando un bucle, mostrar la suma y la media de los numeros introducidos 
hasta que se introduzca un número negativo y despues mostrar el resultado.
*/

var suma=0;
var contador=0;

do{
  var numero=parseInt(prompt("Intrododuce números hasta llegar a uno negativo",0));
  if(isNaN(numero)){
      numero=0;
  }else if(numero>=0){
     suma+=numero;
     contador++;
  }
  console.log(suma);
  console.log(contador);
}while(numero>=0)

alert("La suma es: "+suma);
alert("La media es "+(suma/contador));