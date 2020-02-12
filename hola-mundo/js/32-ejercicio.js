"use strict";
window.addEventListener("load", function(e) {
  console.log("Cargado");

  var formulario = document.forms["formulario"];
  var box_dashed = document.querySelector(".dashed");
  box_dashed.style.display = "none";

  formulario.addEventListener("submit", function(e) {
    console.log("Evento submit capturado");
    e.preventDefault();

    var nombre = document.querySelector("#nombre").value;
    var apellidos = document.querySelector("#apellidos").value;
    var edad = parseInt(document.querySelector("#edad").value);

    if (nombre.trim() == null || nombre.trim().length == 0) {
      // alert("El nombre no es válido");
      var error_nombre = document.querySelector("#error_nombre");
      error_nombre.innerHTML = "El nombre no es válido";
      return false;
    }else{
        document.querySelector("#error_nombre").style.display="none";
    }
    if (apellidos.trim() == null || apellidos.trim().length == 0) {
      alert("El apellido no es válido");
      return false;
    }
    if (edad == null || edad <= 0 || isNaN(edad)) {
      // alert("La edad no es válida");
      return false;
    }

    box_dashed.style.display = "block";

    var p_nombre = document.querySelector("#p_nombre span");
    var p_apelldos = document.querySelector("#p_apellidos span");
    var p_edad = document.querySelector("#p_edad span");

    p_nombre.innerHTML = nombre;
    p_apelldos.innerHTML = apellidos;
    p_edad.innerHTML = edad;

    /* var datos_usuarios=[nombre,apellidos,edad];
        for(var indice in datos_usuarios){
            var parrafo=document.createElement("p");
            parrafo.append(datos_usuarios[indice]);
            box_dashed.append(parrafo);
        } */
  });
});
