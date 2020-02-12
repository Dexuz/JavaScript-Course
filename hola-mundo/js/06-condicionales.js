'use strict'

// Condicional if


/*var edad1=30;
var edad2=12;

if(edad1>edad2){
  console.log("edad1 es mayor que edad2");
}else{
 console.log("edad1 es menor que edad2");
}*/

/* Operadores relacionales
   Mayor que: >
   Menor que: <
   Mayor o igual: >=
   Menor o igual: <= 
   Iual que: ==
   Diferente: !=
*/

/*var age=prompt("introduce tu edad");
var name=prompt("introduce tu nombre");*/

var age=18;
var name="Jordaly Castillo";

if(age>=18){
    console.log(name+" tiene "+age+" años");
    if(age<=24){
       console.log("Eres un tremendo millenial");
    }else if(age>=100){
        console.log(name+" sigue siendo un millenial");
    }else{
        console.log("Ya no eres millenial")
    }
}else{
    console.log(name+" es menor de edad");
}

//Operadores lógicos
/*
AND(Y): &&
OR: (O): ||
Negación: !

*/

//Negación

var year=2019;

if(year != 2016){
    console.log("El año no es 2016, realmente es: "+year);
}

//AND

if(year>=2000 && year <=2020){
    console.log("Estamos en la era actual");
}else{
    console.log("Estamos en la edad postmoderna");   
}

//OR

if(year==2009 || (year>=2009 && year == 2019)){
    console.log("Hay 10 años de diferencia");
}else{
    console.log("Año no registrado")
}

