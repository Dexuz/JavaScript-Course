"use strict";
window.addEventListener("load", function() {
  // timers

  function intervalo(){
    var tiempo = setInterval(function() {
      //setTimeOut (Se ejecuta una sola vez)
      console.log("Set interval ejecutado");

      var encabezdo = document.querySelector("h1");
      if (encabezdo.style.fontSize == "50px") {
        encabezdo.style.fontSize = "20px";
      } else {
        encabezdo.style.fontSize = "50px";
      }
    }, 2000);

    return tiempo;
  }

  var tiempo=intervalo();

  var stop = document.querySelector("#stop");

  stop.addEventListener("click", function(e) {
    alert("Has parado el intervalo en bucle");
    clearInterval(tiempo);
  });

  var start = document.querySelector("#start");

  start.addEventListener("click", function(e) {
    alert("Has inicciado el intervalo en bucle");
    return tiempo=intervalo();
  });
});
