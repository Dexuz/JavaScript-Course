"use strict";

/* 
 Que nos diga si un número es par o impar,
 1.Ventana prompt (decir el número)
 2. Si no es vélidp que nos pida el número otra vez
*/

var number = parseInt(prompt("Introduce un número", 0));

while (isNaN(number) || number==0) {
  number = parseInt(prompt("Introduce un número", 0));
}

if(number%2==0){
    alert(number+" es un número par");
}else{
    alert(number+' no es un número par');
}
