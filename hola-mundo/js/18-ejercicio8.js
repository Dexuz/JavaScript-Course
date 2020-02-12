"use strict";

/* 
 Calculadora
  - Que pida números por pantalla
  - Si ingresamos uno mal que no los vuelva a pedir
  - En el cuerpo de la péagina, en una alerta y por consola el resultado de sumar, restar, mutiplicar y dividir esas dos cifras.
*/

var numero1 = parseInt(prompt("Introduce el primer numero", 0));
var numero2 = parseInt(prompt("Introduce el segundo numero", 0));

while (numero1 < 0 || numero2 < 0 || isNaN(numero1) || isNaN(numero2)) {
  numero1 = parseInt(prompt("Introduce el primer numero", 0));
  numero2 = parseInt(prompt("Introduce el segundo numero", 0));
}

var resultado = "La suma de "+'<b>'+numero1+" + "+numero2+'</b>'+ " es: <b>"+(numero1+numero2)+'</b><br/>'+
                "La resta de "+numero1+" - "+numero2+ " es: "+(numero1-numero2)+"<br/>"+
                "El producto de "+numero1+" x "+numero2+ " es: "+(numero1*numero2)+"<br/>"+
                "La dicisión de "+numero1+" / "+numero2+ " es: "+(numero1/numero2)+"<br/>";

var resultadoCMD = "La suma de "+numero1+" + "+numero2+ " es: "+(numero1+numero2)+"\n"+
                "La resta de "+numero1+" - "+numero2+ " es: "+(numero1-numero2)+"\n"+
                "El producto de "+numero1+" x "+numero2+ " es: "+(numero1*numero2)+"\n"+
                "La dicisión de "+numero1+" / "+numero2+ " es: "+(numero1/numero2)+"\n";

document.write(resultado);
alert(resultadoCMD);
console.log(resultadoCMD);   