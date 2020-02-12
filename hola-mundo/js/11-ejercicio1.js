'use strict'
/*
Programa que pida dos números y que nos diga cuál es  el mayor, el menor y si son iguales.
PLUS: Si los datos no son numeros o son menos o igual a cero, vueleve a pedir los datos. (while)
*/

var numero1=parseInt(prompt("Introduce el primer número",0)); 
var numero2=parseInt(prompt("Introduce el segundo número",0));

while(numero1<=0 || numero2 <=0 || isNaN(numero1) || isNaN(numero2)){ //  || numero1 % 1 !== 0 || numero2 % 1 !== 0 // evaluando si un número es decimal...
     numero1=parseInt(prompt("Los número no son válidos.\nIntroduce el 1er número, por favor.",0)); 
     numero2=parseInt(prompt("Introduce el 2do número",0));
}
alert(numero1+" ,"+numero2);
    if(numero1==numero2){
        alert("Los números son iguales");
    }else if(numero1>numero2){
        alert("El número mayor es: "+numero1);
        alert("El número menor es: "+numero2);
    }else if(numero2>numero1){
        alert("El número mayor es: "+numero2);
        alert("El número menor es: "+numero1);
    }else{   
        alert("Introduce un número valido, por favor.");
    }



/*

var numero1=parseInt(prompt("Introduce el primer número",0)); 
var numero2=parseInt(prompt("Introduce el segundo número",0));

if(isNaN(numero1) && isNaN(numero2)){
    alert("Introduce un número valido, por favor.");
}else{
    validate();
}

function validate(){
    if(numero1==numero2){
        alert("Los números son iguales");
    }else if(numero1>numero2){
        alert("El número mayor es: "+numero1);
        alert("El número menor es: "+numero2);
    }else if(numero2>numero1){
        alert("El número mayor es: "+numero2);
        alert("El número menor es: "+numero1);
    }
} */