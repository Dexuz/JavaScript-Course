"use strict";

//DOM - Document Object Model
/* var bgColor = prompt('Choose a background Color');
var tColor = prompt('Choose a text Color'); */

/* bgColor.toLowerCase();
tColor.toLowerCase(); */

//var caja=document.getElementById("micaja");

//conseguirelementos con un id concreto:

var caja = document.querySelector("#micaja");
caja.innerHTML = "Texto de la caja desde JS";
caja.style.background = "red";
caja.style.padding = "20px";
caja.style.color = "#fff";
caja.className = "hola hola2";

function cambiaColor(bgcolor, tcolor) {
  caja.style.background = bgcolor;
  caja.style.color = tcolor;
}

cambiaColor("red", "black");

// Consegur elementos por su etiqueta
var todosLosDivs = document.getElementsByTagName("div");

var contenidoEnTexto = todosLosDivs[1];
contenidoEnTexto.innerText = "Otro texto para el segundo elemento";
contenidoEnTexto.style.background = "red";

var seccion = document.querySelector("#miseccion");

for (var valor in todosLosDivs) {
  if (typeof todosLosDivs[valor].textContent === "string") {
    var parrafo = document.createElement("p");
    var texto = document.createTextNode(todosLosDivs[valor].textContent);
    parrafo.append(texto);
    //parrafo.appendChild(texto); //Anexar textnode despues de los elem html
    //parrafo.prepend(texto); //Anexar textnode antes de los elem html
    //parrafo.appendChild(texto); //Anexar textnode despues de los elem html
    seccion.append(parrafo);
  }
}

var hr=document.createElement("hr");
seccion.append(hr);

var divsRojos=document.getElementsByClassName("rojo");
var divsAmarillos=document.getElementsByClassName("amarillo");
divsAmarillos[0].style.background="yellow";

/* divsRojos[0].style.background="green";
divsRojos[1].style.background="green"; */
var div;
for(div in divsRojos){
   if(divsRojos[div].className=="rojo"){// El if es para el evitar un error, ya que el bucle le asigana la prop a un elemento undefined
     divsRojos[div].style.background="red";
  }
}

// Query Selctor All

var id=document.querySelector("#encabezado");
console.log(id);

var claseRojo=document.querySelectorAll(".rojo");
console.log(claseRojo);

/* 
todosLosDivs.forEach((valor, indice) => {
   Este metodo no se usa para recorrer arreglod de creados por getElementsByTagName("").
}); */

// Conseguir elementos por su calse css
