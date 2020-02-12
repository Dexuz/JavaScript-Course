$(document).ready(function() {
  var caja = $("#caja");

  // Mostrar y ocultar con 2 botones

  /* $("#mostrar").hide();

  $("#mostrar").click(function() {
    $("#mostrar").hide(); 
    $("#ocultar").show(); 
    caja.fadeTo("slow",1); 
  });

  $("#ocultar").click(function() {
    $("#ocultar").hide(); 
    $("#mostrar").show(); 
    caja.fadeOut("slow",0); 
  }); */

  // Mostrar y ocultar con 1 botón

  var todoenuno = $("#todoenuno");

  todoenuno.click(function() {
    todoenuno.text() == "Ocultar"
      ? todoenuno.text("Mostrar")
      : todoenuno.text("Ocultar");

    caja.toggle("normal",function(){
        console.log("El toggle ha terminado");
    });
  });

/*   Todos los metodos enseñados aqui tienen un segundo parámetro
     para ejecurar código luego de que la animación ha terminado
 */
  $("#animar").click(function() {
    caja
      .animate({
          marginLeft: "200px",
          fontSize: "45px",
          height: "110px"
        },"slow")
      .animate({
          borderRadius: "900px",
          marginTop:"80px"
        },"slow")
      .animate({
          borderRadius: "0px",
          marginLeft:"0px"
        },"slow")
      .animate({
          borderRadius: "100px",
          marginTop:"0px"
        },"slow");
  });

  /*
  Efectos de .show() and .hide()  :

    - .show("fast")  
    - .show("normal") 

  Efectos de .fadeIn() and .fadeOut()  :
   
    - .fadeIn("fast")  
    - .fadeOut("normal") 
    - .fadeIn("slow")  
Efectos de .slideDown() and .slideUp()  :
   
    - .slideDown(("fast")  
    - .slideUp()("normal") 
    - .slideUp()("slow")  

Efectos de .fadeTo()  :
   
    - .fadeTo("fast",1)  // 1 stands for opacity
    - .fadeTo("normal",0) // 0 stands for opacity
    
    Efectos de .toggle(), .fadeToggle() and .slideToggle
    
  
  */
});
