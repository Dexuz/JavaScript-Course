$(document).ready(function(){
// draggable method
  $(".elemento").draggable();

// Redimencionar elementos
 
  $(".elemento").resizable();

  //Selecionar y ordenar elementos

  //$(".lista-seleccionable").selectable();
  $(".lista-seleccionable").sortable({
      update:function(event,ui){
          console.log(event,ui);
      }
  });

  // Droppable
  $("#elemento-movido").draggable();
  $("#area").droppable({
      drop:function(){
          console.log("Has soltado algo dentro del área")
      }
  });

  // EFECTOS

  $("#mostrar").click(function(){
      //$(".caja-efectos").toggle("fade")
      //$(".caja-efectos").fadeToggle() // JQuery without UI
      //$(".caja-efectos").toggle("explode")
      //$(".caja-efectos").effect("explode")
      //$(".caja-efectos").toggle("blind")
      //$(".caja-efectos").toggle("slide")
      //$(".caja-efectos").toggle("drop")
      //$(".caja-efectos").toggle("fold")
      //$(".caja-efectos").toggle("puff")
      //$(".caja-efectos").toggle("scale")
      //$(".caja-efectos").toggle("shake","slow") // ir lento
      $(".caja-efectos").toggle("shake",4000) // Tardar 4 segungos

    })

   //Toolltip
    
   $(document).tooltip();


});