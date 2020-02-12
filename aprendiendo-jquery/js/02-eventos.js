$("document").ready(function() {
  //mouseover y mouseout
  var caja = $("#caja");

  /* caja.mouseover(function(){
    $(this).css("background","red")
});

caja.mouseout(function(){
    $(this).css("background","green")
})  
 */

  //Hover

  function cambiaRojo() {
    $(this).css("background", "red");
    // $(this).css("transition","all 300ms");
  }

  function cambiaVerde() {
    $(this).css("background", "green");
  }

  caja.hover(cambiaRojo, cambiaVerde);

  // click, Doble click

  caja.click(function() {
    $(this)
      .css("background", "blue")
      .css("color", "white");
  });

  caja.dblclick(function() {
    $(this)
      .css("background", "pink")
      .css("color", "yellow");
  });

  // Focus y blurvar

  var nombre = $("#nombre");
  var datos = $("#datos");

  nombre.focus(function() {
    $(this).css("border", "2px solid green");
  });

  nombre.blur(function() {
    $(this).css("border", "1px solid #ccc");
    /*
     .text() == .innerHTML  // .textContent
     .val() == .value
     .show == .style.display="block";
     .hide == .style.display="none";

    
    */
    datos.text($(this).val()).show();
  });

  //mousedown y mouseup // movemove

  datos.mousedown(function() {
    $(this).css("border-color", "gray");
  });

  datos.mouseup(function() {
    $(this).css("border-color", "initial");
  });

// movemove
$(document).mousemove(function(){
    var sigueme=$("#sigueme");
    console.log("Coordenada X: "+event.clientX);
    console.log("Coordenada Y: "+event.clientY);
    $("body").css("cursor","none")
    sigueme.css("left",event.clientX);
    sigueme.css("top",event.clientY);
})


 // siguiendo al mouse con puro JavaScript

/* document.onmousemove=function(e){
    var x=e.clientX;
    var y=e.clientY;
    sigueme.style.left=x+"px";
    sigueme.style.top=y+"px";
    document.body.style.cursor="none";
} */


});
