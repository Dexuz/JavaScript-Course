"use strict";
// Funciones Anónimas
// Es una función que no tiene nombre

/* var pelicula=function(nombre){
    return "La pelicula es "+nombre;
} */

function sumame(numero1, numero2, sumaYmuestra, sumaPorDos) {
  var sumar = numero1 + numero2;

  sumaYmuestra(sumar);
  sumaPorDos(sumar);
  
  return sumar;
  
}

//Llamado de callack con funciones anónimas

//La callback es la ejecuciún de una función dentro de otra


/* sumame(5, 7, function(dato) {
  console.log("La suma es "+dato);
},
function(dato){
  console.log("La suma por dos es "+(dato*2))
}); */

// Funciones de flecha (Igual que la de mas arriba)

sumame(5, 7, (dato) => {
  console.log("La suma es "+dato);
},
(dato)=>{
  console.log("La suma por dos es "+(dato*2))
});


/******** TREE WAS TO CALLBACK 

FUNCTION INSIDE THE FUNCTION ********/


function inFunc(in_1,in_2){
    var res=in_1+in_2;
    
    function calling(){
      alert("La suma inside the func es: "+res);
    }
    
    calling();
    
  }
  
  //inFunc(20,50);
  
  
  /****** 1ST CALLBACK WAY ********/
  
  
  function ops(a,b,callback_1){
    var result= a+b;
    
    callback_1(result);
    
  }
  
  function llamame(result){
      alert("1st callback - la suma: "+result);
  }
  
  //ops(5,10,llamame);
  
  
  /******* SECOND CALLBACK WAY *********/
  
  function ops2(aa,bb,callback_2){
    var res=aa+bb;
    //callback_2(res);
  }
  
  ops2(50,150,function(res){
    alert("2ND callback - La suma es "+res);
  });
  
  
  /*************PRACTICE 1********************/

  /* function sumando(a,b,call_1,call_2){
    var sum=a+b;
    
    call_1(sum);
    call_2(sum);
    
    return sum;
  }
  
  var num1=parseInt(prompt("Introduce el primer numero",0));
  var num2=parseInt(prompt("Introduce el segundo numero",0));
  
  sumando(num1,num2,
  function(s){
    alert("La suma de "+num1+" + "+num2+" es: "+s);
  },
  function(s){
    alert("La suma de "+num1+" + "+num2+" x 2 es: "+(s*2));
  }); */


 /*************PRACTICE 2********************/


/*

var num1=parseInt(prompt("Introduce el primer numero",0));
var num2=parseInt(prompt("Introduce el segundo numero",0));

function sumandoNum(a,b,callback){
  var sum=a+b;
  
  callback(sum);
  
  return sum;
}

function calling(s){
  alert("La suma de ("+num1+" + "+num2+") es: "+s);
  alert("La suma de ("+num1+" + "+num2+") x 2 es: "+(s*2));
}

sumandoNum(num1,num2,calling);

*/