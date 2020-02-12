$("document").ready(function(e) {
  // jQuery === $ (para seleccionar elementos)
  //console.log("JQuery and the web loaded");
  //Selector de ID
  var rojo = $("#rojo")
    .css("background", "red")
    .css("color", "white");

  var amarillo = $("#amarillo")
    .css("background", "yellow")
    .css("color", "green");

  var verde = $("#verde")
    .css("background", "green")
    .css("color", "white");

  //selectores de clases

  //  console.log(mi_clase);
  //  console.log(mi_clase[0]);
  //  console.log(mi_clase.eq(0));

  var mi_clase = $(".zebra").css("padding", "5px");
  //mi_clase.css("border", "5px dashed black");

  $(".sin_border").click(function() {
    $(this).addClass("zebra");
  });

  //Selectores de etiqueta
  var parrafos = $("p").css("cursor","pointer");

  parrafos.click(function() {
    var that = $(this);
    if (!that.hasClass("grande")) {
      // se recomienda las comillas simples
      that.addClass("grande");
    } else {
      that.removeClass("grande");
    }
  });

  //Selecores de atributo

   $("[title='Google']").css("background","#ccc");
   $("[title='Facebook']").css("background","blue");

   //Otros selectores (Find and Parent)

   $('p, a').addClass("margen-superior")
// var busqueda = $('#caja .resaltado').eq(0).parent().parent().parent().find("[title='Google']");

var busqueda = $('#caja #elemento2').parent().parent().find('.resaltado')
   console.log(busqueda);
});
