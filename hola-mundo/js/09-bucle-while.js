'use strict'

//Bucle while: evaluamos una condición y luego ejecuamos una función


/* 
 var year=2018;

while(year<=2051){
   console.log("Estamos en el año"+year);
   year++;
} */

/*while(year>=1991){
   console.log("Estamos en el año"+year);
   year--;
}*/

//do while: ejecutamos una función y luego evaluamos una condición (siempre se ejecuta por lo menos una vez)
var years=101;
do{
  years--
  //var summing=years+1; // llevar de 100-0 
  console.log(years);
  if(years==85){
     break; // rompemos el bucle cuando llega 85
  }
}while(years >=1)
