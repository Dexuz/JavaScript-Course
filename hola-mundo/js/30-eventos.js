"use strict";
window.addEventListener("load", e => {

  function cambiarColor() {
    console.log("Me das clicks");
    var bg = boton.style.background;
    if (bg == "green") {
      boton.style.background = "red";
    } else {
      boton.style.background = "green";
    }

    boton.style.padding = "10px";
    boton.style.border = "1px solid #ccc";

    return true;
  }

  var boton = document.querySelector("#boton");

  //click

  boton.addEventListener("click", function() {
    cambiarColor();
    // boton.style.border="solid 10px black";
    console.log(this);
    this.style.border="solid 10px black"; // This hace referencia al elemento sobre el cual se aplica el evento
    this.classList.add("classThis");
  });

  //mouseover

  boton.addEventListener("mouseover", function() {
    boton.style.background = "yellow";
  });

  //mouseout

  boton.addEventListener("mouseout", function() {
    boton.style.background = "#ccc";
  });

  //Focus
  var input = document.forms["form"].querySelector("input[type=text]");

  input.addEventListener("focus", function() {
    console.log("Estas dentro del input");
  });

  //blur

  input.addEventListener("blur", function(e) {
    console.log("Estas fuera del input");
  });

  //keydown

  input.addEventListener("keydown", function(e) {
    console.log("Estas pulsando esta tecla ", String.fromCharCode(e.keyCode));
  });

  //keypress

  input.addEventListener("keypress", function(e) {
    console.log("Tecla precionada ", String.fromCharCode(e.keyCode));
  });

  //keyup
  input.addEventListener("keyup", function(e) {
    console.log("Tecla al soltar ", String.fromCharCode(e.keyCode));
  });
}); //end load
