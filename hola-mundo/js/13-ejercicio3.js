'use strict'

/*
 Hacer un programa que muestre todos los numeros entre dos numeros introducidos por el usuario
*/

var numero1=parseInt(prompt("Introduce el primer numero",0));
var numero2=parseInt(prompt("Introduce el segundo numero",0));

document.write("<h1>Del "+numero1+" al "+numero2+" están estos números:</h><br><br>")

if(numero1<numero2){
  for(var i=numero1;i<=numero2; i++){
    document.write(i+"<br>");
    debugger;
  }
}else{
    for(var i=numero1;i>=numero2; i--){
        document.write(i+"<br>");
    } 
} 