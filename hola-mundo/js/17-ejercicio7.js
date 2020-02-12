/* 
tabla de multiplicar de un numero introducido por pantalla
*/

var numero = parseInt(prompt("De qué número quieres la tabla?", 1));

document.write("<h1>La Tabla Del " + numero + "</h1>");

for (var i = 1; i <= 12; i++) {
  document.write("<code>"+i + " x " + numero + " = " + i * numero + "<br/><code>");
}

// Todas las tablas de multiplicar

for (var c = 1; c <= 12; c++) {
  document.write("<h1>La Tabla Del " + c + "</h1>");
  for (var i = 1; i <= 12; i++) {
    document.write("<code>"+i + " x " + c + " = " + i * c + "<br/><code>");
  }
}
