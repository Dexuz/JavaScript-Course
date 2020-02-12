"use strict";

var formulario = document.forms["formpeliculas"];
formulario.addEventListener("submit", function(e) {
  var titulo = document.querySelector("#addpeliculas").value;
  
  for(var e in localStorage){
    if(titulo==localStorage[e]){
        var sameMovie=confirm("Esta película ya existe! desea reemplazarla?")
    }
  }

  if (titulo.length >= 1 && titulo.trim() && titulo !== "") {
    localStorage.setItem(titulo, titulo);
  }
});

var ul = document.querySelector("#peliculas-list");

for (var i in localStorage) {
  if (typeof localStorage[i] === "string") {
    var li = document.createElement("li");
    li.append(localStorage[i]);
    ul.append(li);
  }
}

var formulariob = document.forms["formBorrarPeliculas"];

formulariob.addEventListener("submit", function(e) {
  var titulo = document.querySelector("#borrarPeliculas").value;
  if (titulo.length >= 1 && titulo.trim() && titulo !== "") {
    localStorage.removeItem(titulo);
  }
});

var deleteAll = document.querySelector("#deleteAll");

deleteAll.addEventListener("click", function() {
  borraTodas();
});

function borraTodas() {
  var confirmation = confirm("Seguro que quieres eliminar todas las peliculas?");
  if (confirmation !== false) {
    localStorage.clear();
  }
}
