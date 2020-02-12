// Pruebas con let y var


// PRUEBA CON AVR

var num=40;
console.log(num); // 40

if(true){
    var num=50;
    console.log(num); // 50
}

console.log(num); //50

// PRUEBA CON LET

var text="Curso de JS";

console.log(text); // Igual valor asignado

if(true){
    let text="Curso Lavarel 5";
    console.log(text); // Curso Laravel 5
}

console.log(text); // Curso de JS

// Con let no podemos declarar dos veces la misma variable: Eg.:

let saludo="hola";
//let saludo="hola, amor"; //Error, saludo ha sido declarada
saludo=45; // correcto, porque no usamos let para redefinir
